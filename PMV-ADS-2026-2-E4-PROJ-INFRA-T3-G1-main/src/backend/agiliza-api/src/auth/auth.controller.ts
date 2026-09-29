import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UsuarioLoginDto } from '../usuarios/dtos/usuario-login.dto.js';
import { Public } from '../common/decorators/public.decorator.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public()
  login(@Body() usuario: UsuarioLoginDto) {
    return this.authService.login(usuario.email, usuario.senha);
  }
}
