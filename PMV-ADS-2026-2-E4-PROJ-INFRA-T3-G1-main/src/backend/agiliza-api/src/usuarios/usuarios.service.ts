import { ConflictException, Injectable } from '@nestjs/common';
import { Role, Usuario } from './entities/usuario.entity.js';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioCreateDto } from './dtos/usuario-create.dto.js';
import { UsuarioResponseDto } from './dtos/usuario-response.dto.js';
import bcrypt from 'bcrypt';
import { UsuarioDto } from './dtos/usuario.dto.js';

const SALT_ROUNDS = 10;

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) {}

  // findAll é apenas placeholder para testarmos autenticação, autorização etc
  async findAll(): Promise<UsuarioResponseDto[]> {
    return this.usuarioRepository.find();
  }

  async create(usuario: UsuarioCreateDto): Promise<UsuarioResponseDto> {
    const senhaHash = await bcrypt.hash(usuario.senha, SALT_ROUNDS);

    try {
      return await this.usuarioRepository.save(
        this.usuarioRepository.create({ ...usuario, senha: senhaHash }),
      );
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email já cadastrado');
      }
      throw error;
    }
  }

  // Método para ser utilizado na criação de Admins, Profissionais e Clientes
  // private async createUsuario(
  //   manager: EntityManager,
  //   dto: UsuarioDto,
  //   role: Role,
  // ): Promise<Usuario> {
  //   const senha = await bcrypt.hash(dto.senha, SALT_ROUNDS);
  //   return manager.save(
  //     Usuario,
  //     manager.create(Usuario, {
  //       nome: dto.nome,
  //       sobrenome: dto.sobrenome,
  //       cpf: dto.cpf,
  //       telefone: dto.telefone,
  //       email: dto.email,
  //       senha,
  //       role,
  //     }),
  //   );
  // }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ email });
  }
}
