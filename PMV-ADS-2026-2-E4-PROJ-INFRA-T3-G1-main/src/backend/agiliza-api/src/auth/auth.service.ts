import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { JwtPayload } from './types/jwt-payload.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, senha: string): Promise<{ access_token: string }> {
    const usuario = await this.usuarioService.findByEmail(email);

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      throw new UnauthorizedException('Email ou senha inválidos.');
    }

    const payload: JwtPayload = { sub: usuario.id, email: usuario.email, role: usuario.perfil };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
