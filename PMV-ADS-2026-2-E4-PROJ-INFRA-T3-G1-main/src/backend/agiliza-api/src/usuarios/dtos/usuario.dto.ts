import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Role } from '../entities/usuario.entity.js';

export class UsuarioDto {
  @ApiProperty({ example: 'joao.silva@exemplo.com' })
  @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
  @IsEmail({}, { message: 'validation.IS_EMAIL' })
  email: string;

  @ApiProperty({ example: 'SenhaForte123@' })
  @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
  @IsString({ message: 'validation.IS_STRING' })
  senha: string;

  @ApiProperty({ example: 'cliente' })
  @IsEnum(Role)
  perfil: Role;

  @ApiProperty({ example: 'João' })
  @IsString({ message: 'validation.IS_STRING' })
  @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
  nome: string;

  @ApiProperty({ example: 'Silva' })
  @IsNotEmpty()
  @IsString({ message: 'validation.IS_STRING' })
  sobrenome: string;

  @ApiProperty({ example: '123.456.789-00' })
  @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
  @IsString({ message: 'validation.IS_STRING' })
  @Length(11, 14)
  cpf: string;

  @ApiProperty({ example: '(31) 99999-0000' })
  @IsString({ message: 'validation.IS_STRING' })
  @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
  @Length(8, 14)
  telefone: string;
}
