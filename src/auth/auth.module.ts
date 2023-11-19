// auth.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.strategy';

@Module({
imports: [TypeOrmModule.forFeature([User]),
JwtModule.register({
    secret: 'peocess.env.JWT_SECRET',
    signOptions:{expiresIn: '60s'}
})
],
  controllers: [AuthController],
  providers: [AuthService, jwtStrategy],
})
export class AuthModule {}
