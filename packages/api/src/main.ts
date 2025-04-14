import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        // TODO: make this configurable via command line arg
        cors: true,
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
