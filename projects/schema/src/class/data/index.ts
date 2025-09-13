import { DndCharClassDto } from '../dto/class.dto.js';
import { fighterClass } from './fighter.data.js';

export * from './class.data.js';
export const classes: Record<string, DndCharClassDto> = {
    [fighterClass.id]: fighterClass,
};
