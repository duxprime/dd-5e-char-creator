import { DndCharacterDto, DndAlignment } from '../dto/index.js';

/**
 * Canned character to use until persistence is implemented.
 */
export const defaultCharacter: DndCharacterDto = {
    id: crypto.randomUUID().toString(),
    playerName: 'Chris Duxbury',
    characterName: 'Rainent Doomgaze',
    level: 1,
    xp: 0,
    armorClass: 0,
    alignment: DndAlignment.Neutral,
    maxHp: 10,
    proficiencyBonus: 1,
    initiative: 1,
    speed: 5,
    strength: 10,
    intelligence: 10,
    charisma: 10,
    dexterity: 10,
    constitutition: 10,
    wisdom: 10,
    className: 'Wizard',
    raceName: 'Human',
    links: {
        equipment: '',
        class: '',
        race: '',
    },
};
