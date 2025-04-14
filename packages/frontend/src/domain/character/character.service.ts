import type {
    DndCharacterDto,
    DndCharacterListDto,
} from '@dnd/schema/character';

const baseUrl = 'localhost:3000';
const controller = 'character';
export class CharacterService {
    public async getCharacter(id: string) {
        const response = await fetch(`http://${baseUrl}/${controller}/${id}`);
        return response.json() as unknown as DndCharacterDto;
    }

    public async getCharacterList() {
        const response = await fetch(`http://${baseUrl}/${controller}/list`);
        return response.json() as unknown as DndCharacterListDto;
    }
}
