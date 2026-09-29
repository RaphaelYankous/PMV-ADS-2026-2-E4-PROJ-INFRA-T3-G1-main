import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { senha: _senha, ...body } = req.body ?? {};
    console.log(req.method, req.originalUrl, body);
    next();
  }
}
