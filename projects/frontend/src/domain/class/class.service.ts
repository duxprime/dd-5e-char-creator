import {
    DndCharClassEntry,
    DndCharClassDto,
    DndClassType,
} from '@dnd/schema/class';

const baseUrl = 'localhost:3000';
const controller = 'class';

export class ClassService {
    public async getClassList() {
        const response = await fetch(`http://${baseUrl}/${controller}/list`);
        return response.json() as unknown as DndCharClassEntry[];
    }

    public async getClass(id: string | DndClassType) {
        const response = await fetch(`http://${baseUrl}/${controller}/${id}`);
        return response.json() as unknown as DndCharClassDto;
    }
}
