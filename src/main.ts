import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      );
      app.setGlobalPrefix('api');
      app.enableVersioning({
        type: VersioningType.URI,
      });
      await app.listen(process.env.PORT || 3000);
}
bootstrap();
