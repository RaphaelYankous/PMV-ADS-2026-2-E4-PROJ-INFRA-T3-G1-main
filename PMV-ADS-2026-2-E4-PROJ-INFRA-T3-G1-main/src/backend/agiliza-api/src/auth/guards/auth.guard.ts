import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UnauthorizedException } from '../../common/exceptions/unauthorized.exception.js';
import { JwtPayload } from '../types/jwt-payload.js';
import type { AuthRequest } from '../types/jwt-payload.js';
import { resolveAccessPolicy } from '../policies/access-policy.js';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policy = resolveAccessPolicy(this.reflector, context);

    if (policy.kind === 'public') {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.resgatarToken(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token);
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private resgatarToken(request: Request | AuthRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
