// auth.controller.ts
import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto,  } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    const { email, password } = loginData;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new NotFoundException('Invalid username/email or password');
    }

    // Aquí puedes devolver información adicional o token JWT para autenticación
    return { message: 'Login successful', user };
  }

  @Post('register')
  async register(@Body() newUser: RegisterDto) {
    return this.authService.register(newUser),{message: 'register successful'};
  }
}
