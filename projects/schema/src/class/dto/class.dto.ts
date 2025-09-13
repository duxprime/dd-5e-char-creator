export enum DndClassType {
    Barbarian = 'Barbarian',
    Bard = 'Bard',
    Cleric = 'Cleric',
    Druid = 'Druid',
    Fighter = 'Fighter',
    Monk = 'Monk',
    Paladin = 'Paladin',
    Wizard = 'Wizard',
    Ranger = 'Ranger',
    Rogue = 'Rogue',
    Sorcerer = 'Sorcerer',
}

export interface DndCharClassEntry {
    id: string;
    name: DndClassType;
    description: string;
    links: {
        details: string;
    };
}

interface DndCharClassBase extends Omit<DndCharClassEntry, 'links'> {
    levels: DndClassLevelDto[];
    isCaster: boolean;
    /**
     * The type of die to use when determining hit point improvements on leveling up.
     *
     * The value corresponds to the number of sides on the die (e.g., d8, d10, etc.).
     */
    hitDice: number;
    proficiences: DndProficienciesDto;
}

interface DndCharClass extends DndCharClassBase {
    levels: DndClassLevelDto[];
    isCaster: false;
}

interface DndCasterClass extends DndCharClassBase {
    levels: DndCasterLevelDto[];
    isCaster: true;
}

export type DndCharClassDto = DndCharClass | DndCasterClass;

export interface DndClassLevelDto {
    level: number;
    proficiencyBonus: number;
    features?: DndClassFeatureDto[];
}

export interface DndCasterLevelDto extends DndClassLevelDto {
    cantrips: number;
    spells: number;
    /**
     * Array containing the number of spell slots per level,
     * where the zero-based index in the array corresponds to the
     * spell level minus one (e.g, position 0 is 1st level, etc.).
     */
    spellSlots: number[];
}

export interface DndClassFeatureDto {
    id: string;
    name: string;
    description: string;
    /**
     * A catch-all numeric value that increases each time a feature is gained,
     * improving it with successive levels.
     *
     * This could be used to represent number of uses before a long rest,
     * number of attacks in Extra Attack, etc.
     */
    modifier?: number;
}

export enum AbilityScore {
    Cha = 'Charisma',
    Con = 'Constitution',
    Dex = 'Dexterity',
    Int = 'Intelligence',
    Str = 'Strength',
    Wis = 'Wisdom',
}

export enum Armor {
    Light = 'Light',
    Medium = 'Medium',
    Heavy = 'Heavy',
    Shield = 'Shield',
}

export enum Weapon {
    Simple = 'Simple',
    Martial = 'Martial',
}

export interface DndProficienciesDto {
    armor: string[];
    weapons: string[];
    tools?: string[];
    savingThrows: AbilityScore[];
}
