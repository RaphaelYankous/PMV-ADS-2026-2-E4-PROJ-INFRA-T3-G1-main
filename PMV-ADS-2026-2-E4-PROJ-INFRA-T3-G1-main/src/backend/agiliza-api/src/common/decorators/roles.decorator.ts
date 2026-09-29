import { SetMetadata } from '@nestjs/common';
import { Role } from '../../usuarios/entities/usuario.entity.js';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: [Role, ...Role[]]) => SetMetadata(ROLES_KEY, roles);
