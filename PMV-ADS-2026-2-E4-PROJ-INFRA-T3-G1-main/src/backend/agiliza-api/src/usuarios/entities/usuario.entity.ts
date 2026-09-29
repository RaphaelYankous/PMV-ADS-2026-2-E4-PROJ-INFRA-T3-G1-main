import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export enum Role {
  ADMIN = 'admin',
  PROFISSIONAL = 'profissional',
  CLIENTE = 'cliente',
}

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Role })
  perfil: Role;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  sobrenome: string;

  @Column({ type: 'varchar', unique: true })
  cpf: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @Column({ type: 'varchar' })
  @Exclude()
  senha: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // RELAÇÕES FUTURAS:

  // @OneToOne(() => Admin, (admin) => admin.usuario )
  // admin?: Relation<Admin>;

  // @OneToOne(() => Profissional, (profissional) => profissional.usuario )
  // profissional?: Relation<Profissional>;

  // @OneToOne(() => Cliente, (cliente) => cliente.usuario )
  // cliente?: Relation<Cliente>;
}
