import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CharacterModule } from './character/character.module.js';
import { ClassModule } from './class/class.module.js';

@Module({
    imports: [CharacterModule, ClassModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
