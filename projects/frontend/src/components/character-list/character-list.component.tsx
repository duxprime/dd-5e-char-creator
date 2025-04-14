import { useEffect, useState } from 'react';
import { CharacterService } from '../../domain/character/index.js';
import type { DndCharacterListDto } from '@dnd/schema/character';

const service = new CharacterService();

export function CharacterList() {
    const [characters, setCharacters] = useState([] as DndCharacterListDto);

    useEffect(() => {
        service.getCharacterList().then(setCharacters);
    }, []);

    const listItems = characters.map((c) => (
        <li key={c.id}>
            <span>{c.characterName}</span> <em>({c.playerName})</em>
        </li>
    ));

    return (
        <>
            <h1>Character List</h1>
            <ul>{listItems}</ul>
        </>
    );
}
