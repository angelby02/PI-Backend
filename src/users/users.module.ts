import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/auth/user.entity';
import { Profile } from './profile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Profile]),
JwtModule.register({
    secret: 'peocess.env.JWT_SECRET',
    signOptions:{expiresIn: '10s'}
}),],
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule {}
