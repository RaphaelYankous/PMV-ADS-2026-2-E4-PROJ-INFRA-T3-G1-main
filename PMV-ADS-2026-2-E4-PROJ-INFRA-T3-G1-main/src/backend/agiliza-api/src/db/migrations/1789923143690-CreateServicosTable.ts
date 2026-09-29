import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateServicosTable1789923143690 implements MigrationInterface {
  name = 'CreateServicosTable1789923143690';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`servicos\` (\`id\` varchar(36) NOT NULL, \`nome\` varchar(100) NOT NULL, \`preco\` int NOT NULL COMMENT 'Valor em centavos para evitar ponto flutuante', \`descricao\` text NOT NULL, \`duracao\` int NOT NULL COMMENT 'Duração estimada em minutos', \`ponto_fidelidade\` int NOT NULL DEFAULT '0', \`estabelecimento_id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`servicos\``);
  }
}
