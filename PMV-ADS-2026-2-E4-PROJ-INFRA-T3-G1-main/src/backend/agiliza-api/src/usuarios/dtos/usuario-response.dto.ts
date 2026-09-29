import { OmitType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto.js';

export class UsuarioResponseDto extends OmitType(UsuarioDto, ['senha'] as const) {
  id: string;
}
