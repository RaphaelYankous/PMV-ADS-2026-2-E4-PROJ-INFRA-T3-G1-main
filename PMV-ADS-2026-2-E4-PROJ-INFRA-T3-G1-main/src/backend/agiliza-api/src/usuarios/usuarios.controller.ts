import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { UsuarioResponseDto } from './dtos/usuario-response.dto.js';
import { UsuarioCreateDto } from './dtos/usuario-create.dto.js';
import { Public } from '../common/decorators/public.decorator.js';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<UsuarioResponseDto[]> {
    return this.usuariosService.findAll();
  }

  @Post()
  @Public()
  create(@Body() dto: UsuarioCreateDto): Promise<UsuarioResponseDto> {
    return this.usuariosService.create(dto);
  }
}
