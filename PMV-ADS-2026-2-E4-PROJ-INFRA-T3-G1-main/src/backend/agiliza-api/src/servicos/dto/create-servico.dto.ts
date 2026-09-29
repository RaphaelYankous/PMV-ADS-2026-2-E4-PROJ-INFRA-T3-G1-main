import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreateServicoDto {
  @ApiProperty({ example: 'Corte Degradê Navalhado' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 4500, description: 'Preço em centavos (R$ 45,00)' })
  @IsInt()
  @IsPositive()
  preco: number;

  @ApiProperty({ example: 'Corte moderno com acabamento navalhado e toalha quente.' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: 40, description: 'Duração em minutos' })
  @IsInt()
  @IsPositive()
  duracao: number;

  @ApiProperty({ example: 10, description: 'Pontos de fidelidade concedidos', default: 0 })
  @IsInt()
  @Min(0)
  pontoFidelidade: number;

  @ApiProperty({ example: 'a1b2c3d4-0000-0000-0000-000000000000' })
  @IsString()
  @IsNotEmpty()
  estabelecimentoId: string;
}
