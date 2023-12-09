import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from './user.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(usernameOrEmail: string, password: string): Promise<{ user: User; accessToken: string } | null> {
    const user = await this.userRepository.findOne({
      where: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    const accessToken = this.generateAccessToken(user);

    return { user, accessToken };
  }

  async register(newUser: RegisterDto): Promise<User> {
    return null;
  }


  private generateAccessToken(user: User): string {
    const payload = { userId: user.id, username: user.username }; // Puedes incluir más información en el payload si es necesario
    const accessToken = jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' }); // Ajusta la clave y el tiempo de expiración según tu configuración

    return accessToken;
  }
}
