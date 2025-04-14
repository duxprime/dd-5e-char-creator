import { Controller, Get, Param } from '@nestjs/common';
import {
    type DndCharacterDto,
    type DndCharacterListDto,
    defaultCharacter,
    defaultCharacterList,
} from '@dnd/schema/character';

@Controller('character')
export class CharacterController {
    @Get('list')
    public getCharacters(): DndCharacterListDto {
        return defaultCharacterList;
    }

    @Get(':id')
    public getCharacter(@Param('id') id: string): DndCharacterDto {
        return {
            ...defaultCharacter,
            id,
        };
    }
}
