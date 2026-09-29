import { PickType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto.js';

export class UsuarioLoginDto extends PickType(UsuarioDto, ['email', 'senha'] as const) {}
