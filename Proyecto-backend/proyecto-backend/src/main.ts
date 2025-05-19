import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix  ('api/v1');
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
  });
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, // esto convierte strings a date si usamos el @tyoe(() => Date) en el dto
  }),
);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
