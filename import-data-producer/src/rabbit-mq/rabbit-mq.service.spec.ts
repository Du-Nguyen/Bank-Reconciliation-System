import { Test, TestingModule } from '@nestjs/testing';
import { RabbitMQService } from './rabbit-mq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

describe('RabbitMQService', () => {
  let service: RabbitMQService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ClientsModule.register([
        {
          name: 'rabbit-mq-module',
          transport: Transport.RMQ,
          options: {
            urls: [
              'amqp://admin:admin@localhost:5672',
            ],
            queue: 'rabbit-mq-nest-js',
          },
        },
      ])],
      providers: [
          RabbitMQService,
      ],
    }).compile();
    service = module.get<RabbitMQService>(RabbitMQService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
