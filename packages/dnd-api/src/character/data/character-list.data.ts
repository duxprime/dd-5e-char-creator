import { defaultCharacter } from './character.data';
import type { DndCharacterList } from '../dto';

export const defaultCharacterList: DndCharacterList = [defaultCharacter].map(
    ({ id, playerName, characterName }) => ({
        id,
        playerName,
        characterName,
        links: {
            sheet: `/character/${id}`,
        },
    })
);
