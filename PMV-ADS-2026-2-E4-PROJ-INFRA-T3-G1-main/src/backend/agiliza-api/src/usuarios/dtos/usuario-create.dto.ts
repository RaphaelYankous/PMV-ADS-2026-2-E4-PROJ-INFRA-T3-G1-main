import { Validate } from 'class-validator';
import { IsUnique } from '../../common/validators/isUnique.validator.js';
import { UsuarioDto } from './usuario.dto.js';

export class UsuarioCreateDto extends UsuarioDto {
  @Validate(IsUnique, ['usuarios', 'email'])
  declare email: string;
}
