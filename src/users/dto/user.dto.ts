// user.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  username?: string;

  @IsString()
  password?: string;
}
