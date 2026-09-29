import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { AuthRequest } from '../types/jwt-payload.js';
import { resolveAccessPolicy } from '../policies/access-policy.js';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const policy = resolveAccessPolicy(this.reflector, context);

    if (policy.kind !== 'roles') return true;

    const request = context.switchToHttp().getRequest<AuthRequest>();

    if (!request.user || !policy.roles.includes(request.user.role)) {
      throw new ForbiddenException('Você não tem permissão para acessar este recurso.');
    }

    return true;
  }
}
