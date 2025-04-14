export interface DndCharacterDto {
    id: string;
    playerName: string;
    characterName: string;
    xp: number;
    level: number;
    alignment: DndAlignment;
    maxHp: number;
    armorClass: number;
    proficiencyBonus: number;
    initiative: number;
    speed: number;
    strength: number;
    dexterity: number;
    constitutition: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    className: string;
    raceName: string;
    links: {
        class: string;
        equipment: string;
        race: string;
    };
}

export enum DndAlignment {
    Good = 'good',
    Neutral = 'neutral',
    Evil = 'evil',
    LawfulGood = 'lawful-good',
    LawfulNeutral = 'lawful-neutral',
    LawfulEvil = 'lawful-evil',
    ChaoticGood = 'chaotic-good',
    ChaoticNeutral = 'chaotic-neutral',
    ChaoticEvil = 'chaotic-evil',
}
