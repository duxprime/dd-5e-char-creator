import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller.js';

@Module({
    imports: [],
    controllers: [CharacterController],
    providers: [],
})
export class CharacterModule {}
