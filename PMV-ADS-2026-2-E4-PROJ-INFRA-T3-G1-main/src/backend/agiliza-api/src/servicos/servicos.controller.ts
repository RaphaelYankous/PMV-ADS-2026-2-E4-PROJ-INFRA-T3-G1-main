import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServicosService } from './servicos.service.js';
import { CreateServicoDto } from './dto/create-servico.dto.js';
import { UpdateServicoDto } from './dto/update-servico.dto.js';

@ApiTags('Serviços')
@ApiBearerAuth()
@Controller('estabelecimentos/:estabelecimentoId/servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo serviço no estabelecimento' })
  create(
    @Param('estabelecimentoId') estabelecimentoId: string,
    @Body() createServicoDto: CreateServicoDto,
  ) {
    createServicoDto.estabelecimentoId = estabelecimentoId;
    return this.servicosService.create(createServicoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os serviços de um estabelecimento' })
  findAll(@Param('estabelecimentoId') estabelecimentoId: string) {
    return this.servicosService.findAllByEstabelecimento(estabelecimentoId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Recupera os detalhes de um serviço por ID' })
  findOne(@Param('id') id: string) {
    return this.servicosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um serviço' })
  update(
    @Param('estabelecimentoId') estabelecimentoId: string,
    @Param('id') id: string,
    @Body() updateServicoDto: UpdateServicoDto,
  ) {
    return this.servicosService.update(id, updateServicoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove um serviço' })
  remove(@Param('estabelecimentoId') estabelecimentoId: string, @Param('id') id: string) {
    return this.servicosService.remove(id);
  }
}
