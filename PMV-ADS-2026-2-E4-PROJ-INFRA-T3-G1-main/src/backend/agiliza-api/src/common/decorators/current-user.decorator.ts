import { createParamDecorator } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';
import { JwtPayload, type AuthRequest } from '../../auth/types/jwt-payload.js';

export const CurrentUser = createParamDecorator<undefined | JwtPayload>(
  (_data: unknown, context: ExecutionContext) =>
    context.switchToHttp().getRequest<AuthRequest>().user,
);
