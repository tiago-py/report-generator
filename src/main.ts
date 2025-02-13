import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:3000"]
  });
  await app.listen(3003);
  console.log("NestJS Server listening on port 3003");
}
bootstrap();
