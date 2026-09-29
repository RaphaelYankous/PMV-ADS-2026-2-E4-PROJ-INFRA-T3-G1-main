import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
  constructor() {
    super('Usuário não autenticado', HttpStatus.UNAUTHORIZED);
  }
}
