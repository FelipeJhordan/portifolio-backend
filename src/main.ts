import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyRateLimit from 'fastify-rate-limit';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true,
    },
  );

  app.register(fastifyRateLimit, {
    max: 10,
    timeWindow: '1 minute',
    global: true,
  });
  console.log(process.env.PORT);
  await app.listen(process.env.PORT || 5555, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
