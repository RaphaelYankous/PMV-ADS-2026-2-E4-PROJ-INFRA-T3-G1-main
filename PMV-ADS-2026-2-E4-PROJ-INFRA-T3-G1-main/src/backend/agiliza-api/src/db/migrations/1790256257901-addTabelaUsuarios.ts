import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTabelaUsuarios1790256257901 implements MigrationInterface {
  name = 'AddTabelaUsuarios1790256257901';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`usuarios\` (\`id\` varchar(36) NOT NULL, \`perfil\` enum ('admin', 'profissional', 'cliente') NOT NULL, \`email\` varchar(255) NOT NULL, \`nome\` varchar(255) NOT NULL, \`sobrenome\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`telefone\` varchar(20) NOT NULL, \`senha\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_446adfc18b35418aac32ae0b7b\` (\`email\`), UNIQUE INDEX \`IDX_ebebcaef8457dcff6e6d69f17b\` (\`cpf\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_ebebcaef8457dcff6e6d69f17b\` ON \`usuarios\``);
    await queryRunner.query(`DROP INDEX \`IDX_446adfc18b35418aac32ae0b7b\` ON \`usuarios\``);
    await queryRunner.query(`DROP TABLE \`usuarios\``);
  }
}
