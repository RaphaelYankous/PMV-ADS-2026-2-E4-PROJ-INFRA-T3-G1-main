import { Request } from 'express';
import { Role } from '../../usuarios/entities/usuario.entity.js';

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
}

export type AuthRequest = Request & { user: JwtPayload };
