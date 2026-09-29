import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './entities/servico.entity.js';
import { CreateServicoDto } from './dto/create-servico.dto.js';
import { UpdateServicoDto } from './dto/update-servico.dto.js';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async create(createServicoDto: CreateServicoDto): Promise<Servico> {
    const servico = this.servicoRepository.create(createServicoDto);
    return this.servicoRepository.save(servico);
  }

  async findAllByEstabelecimento(estabelecimentoId: string): Promise<Servico[]> {
    return this.servicoRepository.find({
      where: { estabelecimentoId },
    });
  }

  async findOne(id: string): Promise<Servico> {
    const servico = await this.servicoRepository.findOne({
      where: { id },
    });

    if (!servico) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado.`);
    }

    return servico;
  }

  async update(id: string, updateServicoDto: UpdateServicoDto): Promise<Servico> {
    const servico = await this.findOne(id);
    const servicoAtualizado = Object.assign(servico, updateServicoDto);
    return this.servicoRepository.save(servicoAtualizado);
  }

  async remove(id: string): Promise<void> {
    const servico = await this.findOne(id);
    await this.servicoRepository.remove(servico);
  }
}
