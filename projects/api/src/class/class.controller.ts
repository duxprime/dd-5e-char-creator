import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
} from '@nestjs/common';
import {
    DndCharClassEntry,
    DndCharClassDto,
    classList,
    classes,
} from '@dnd/schema/class';

@Controller('class')
export class ClassController {
    @Get('list')
    public getClasses(): DndCharClassEntry[] {
        return classList;
    }

    @Get(':id')
    public getClass(@Param('id') id: string): DndCharClassDto {
        if (id in classes) {
            return classes[id];
        }

        // try to get class by name for convenience
        const classByName = Object.values(classes).find(
            (c) => c.name.toLowerCase() === id.toLowerCase()
        );
        if (classByName) {
            return classByName;
        }

        throw new HttpException(
            `Invalid class name or ID: ${id}`,
            HttpStatus.BAD_REQUEST
        );
    }
}
