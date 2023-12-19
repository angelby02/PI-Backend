import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @MinLength(5, { message: 'El ususario debe tener al menos 5 caracteres' })
  @MaxLength(15, { message: 'El ususario no debe pasar de 15 caracteres' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
  })
  username: string;

  @IsNotEmpty({ message: 'El correo de usuario es obligatorio' })
  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  email: string;


  @IsString()
  @IsNotEmpty({ message: 'La clave es obligatorio' })
  @MinLength(5, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(15, { message: 'La contraseña no debe pasar de 15 caracteres' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
    message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo'
  })
  password: string;


}

export class UpdateUserDto {

  @IsString()
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @MinLength(5, { message: 'El ususario debe tener al menos 5 caracteres' })
  @MaxLength(15, { message: 'El ususario no debe pasar de 15 caracteres' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
  })
  username?: string;

  @IsNotEmpty({ message: 'El correo de usuario es obligatorio' })
  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'La clave es obligatorio' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(15, { message: 'La contraseña no debe pasar de 15 caracteres' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
    message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo'
  })
  password?: string;
}
