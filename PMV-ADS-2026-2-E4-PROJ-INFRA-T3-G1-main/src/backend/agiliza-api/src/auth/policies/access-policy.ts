import { ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator.js';
import { ROLES_KEY } from '../../common/decorators/roles.decorator.js';
import { Role } from '../../usuarios/entities/usuario.entity.js';

export type AccessPolicy =
  { kind: 'public' } | { kind: 'authenticated' } | { kind: 'roles'; roles: Role[] };

export function resolveAccessPolicy(reflector: Reflector, context: ExecutionContext): AccessPolicy {
  return (
    resolveTargetPolicy(reflector, context.getHandler()) ??
    resolveTargetPolicy(reflector, context.getClass()) ?? { kind: 'authenticated' }
  );
}

function resolveTargetPolicy(reflector: Reflector, target: Function): AccessPolicy | undefined {
  const isPublic = reflector.get<boolean | undefined>(IS_PUBLIC_KEY, target) === true;
  const roles = reflector.get<Role[] | undefined>(ROLES_KEY, target);

  if (isPublic && roles !== undefined) {
    throw new InternalServerErrorException(
      'Uma rota não pode declarar @Public() e @Roles() no mesmo nível.',
    );
  }

  if (isPublic) return { kind: 'public' };

  if (roles !== undefined) {
    if (roles.length === 0) {
      throw new InternalServerErrorException('@Roles() deve declarar ao menos um perfil.');
    }

    return { kind: 'roles', roles };
  }

  return undefined;
}
