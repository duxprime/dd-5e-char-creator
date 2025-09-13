import { Module } from '@nestjs/common';
import { ClassController } from './class.controller.js';

@Module({
    imports: [],
    controllers: [ClassController],
    providers: [],
})
export class ClassModule {}
