import { Controller, Get, Param } from '@nestjs/common';
import { defaultCharacter, defaultCharacterList } from './data';
import { DndCharacter, DndCharacterList } from './dto';

@Controller('character')
export class CharacterController {
    @Get('list')
    public getCharacters(): DndCharacterList {
        return defaultCharacterList;
    }

    @Get(':id')
    public getCharacter(@Param('id') id: string): DndCharacter {
        return {
            ...defaultCharacter,
            id,
        };
    }
}
