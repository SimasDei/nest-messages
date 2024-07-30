import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    MessagesModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
