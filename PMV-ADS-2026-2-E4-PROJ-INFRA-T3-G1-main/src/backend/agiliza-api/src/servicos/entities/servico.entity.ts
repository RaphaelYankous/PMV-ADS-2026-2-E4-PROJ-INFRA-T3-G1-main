import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('servicos')
export class Servico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'int', comment: 'Valor em centavos para evitar ponto flutuante' })
  preco: number;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'int', comment: 'Duração estimada em minutos' })
  duracao: number;

  @Column({ name: 'ponto_fidelidade', type: 'int', default: 0 })
  pontoFidelidade: number;

  @Column({ name: 'estabelecimento_id', type: 'varchar', length: 36 })
  estabelecimentoId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
