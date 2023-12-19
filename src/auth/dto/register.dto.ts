import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @MinLength(5, { message: 'El nombre de usuario debe tener al menos 5 caracteres' })
  @MaxLength(15, { message: 'El nombre de usuario no debe pasar de 15 caracteres' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
  })
    username: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El correo de usuario es obligatorio' })
    @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
    email: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: 'La clave es obligatorio' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    @MaxLength(15, { message: 'La contraseña no debe pasar de 15 caracteres' })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
      message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo'
    })
    password: string;
  }