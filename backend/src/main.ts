import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Aquí activamos el ValidationPipe global
  app.useGlobalPipes(new ValidationPipe({
  whitelist: true,              // elimina propiedades no declaradas en el DTO
  forbidNonWhitelisted: true,   // lanza error si hay campos extras
  transform: true,              // transforma payload plain -> DTO instance
  transformOptions: { enableImplicitConversion: true },
}));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
