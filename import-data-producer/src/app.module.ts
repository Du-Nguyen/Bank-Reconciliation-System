import { Module } from '@nestjs/common';
import { RabbitMQModule } from './rabbit-mq/rabbit-mq.module';
import { ImportTransactionModule } from './import-transaction/import-transaction.module';
import { MulterModule } from '@nestjs/platform-express';
import {
    KeycloakConnectModule,
    AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from './config/config.service';
import KeycloakConfig = require('./config/keycloak-config');

@Module({
    imports: [
        RabbitMQModule,
        ImportTransactionModule,
        MulterModule.register(),
        KeycloakConnectModule.registerAsync({useFactory:KeycloakConfig}),
    ],
    controllers: [],
    providers: [
        ConfigService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {}
