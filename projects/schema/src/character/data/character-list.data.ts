import { defaultCharacter } from './character.data.js';
import type { DndCharacterListDto } from '../dto/index.js';

export const defaultCharacterList: DndCharacterListDto = [defaultCharacter].map(
    ({ id, playerName, characterName }) => ({
        id,
        playerName,
        characterName,
        links: {
            sheet: `/character/${id}`,
        },
    })
);
