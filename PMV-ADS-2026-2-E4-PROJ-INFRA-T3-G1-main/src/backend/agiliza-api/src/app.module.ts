import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { AuthModule } from './auth/auth.module.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { I18nModule } from 'nestjs-i18n';
import { LoggerMiddleware } from './common/middleware/logger.middleware.js';
import { IsUnique } from './common/validators/isUnique.validator.js';
import { EntityManager } from 'typeorm';
import { ServicosModule } from './servicos/servicos.module.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './src/config/development.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        autoLoadEntities: true,
      }),
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'pt-BR',
      loaderOptions: {
        path: path.join(dirname, 'i18n'),
        watch: true,
      },
    }),
    UsuariosModule,
    AuthModule,
    ServicosModule,
  ],
  providers: [IsUnique],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly entityManager: EntityManager) {}

  onModuleInit() {
    IsUnique.init(this.entityManager);
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*splat', method: RequestMethod.ALL });
  }
}
