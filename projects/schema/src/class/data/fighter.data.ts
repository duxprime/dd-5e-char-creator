import {
    AbilityScore,
    Armor,
    DndCharClassDto,
    DndClassLevelDto,
    DndClassType,
    Weapon,
} from '../dto/class.dto.js';
import { classList } from './class.data.js';
import { abilityScoreImprovement } from './features.data.js';
import {
    actionSurge,
    extraAttack,
    fightingStyle,
    indomitable,
    martialArchetype,
    martialArchetypeFeature,
    secondWind,
} from './fighter.features.data.js';

const entry = classList.find(
    (classEntry) => classEntry.name === DndClassType.Fighter
);

if (!entry) {
    throw new Error(`Could not find class entry for ${DndClassType.Fighter}`);
}

const levels: DndClassLevelDto[] = [
    {
        proficiencyBonus: 2,
        features: [fightingStyle, secondWind],
    },
    {
        proficiencyBonus: 2,
        features: [{ ...actionSurge, modifier: 1 }],
    },
    {
        proficiencyBonus: 2,
        features: [martialArchetype],
    },
    {
        proficiencyBonus: 2,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 3,
        features: [{ ...extraAttack, modifier: 1 }],
    },
    {
        proficiencyBonus: 3,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 3,
        features: [martialArchetypeFeature],
    },
    {
        proficiencyBonus: 3,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 4,
        features: [{ ...indomitable, modifier: 1 }],
    },
    {
        proficiencyBonus: 4,
        features: [martialArchetypeFeature],
    },
    {
        proficiencyBonus: 4,
        features: [{ ...extraAttack, modifier: 2 }],
    },
    {
        proficiencyBonus: 4,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 5,
        features: [{ ...indomitable, modifier: 2 }],
    },
    {
        proficiencyBonus: 5,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 5,
        features: [martialArchetypeFeature],
    },
    {
        proficiencyBonus: 5,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 6,
        features: [
            { ...actionSurge, modifier: 2 },
            { ...indomitable, modifier: 3 },
        ],
    },
    {
        proficiencyBonus: 6,
        features: [martialArchetypeFeature],
    },
    {
        proficiencyBonus: 6,
        features: [abilityScoreImprovement],
    },
    {
        proficiencyBonus: 6,
        features: [{ ...extraAttack, modifier: 3 }],
    },
].map((level, i) => ({
    ...level,
    level: i + 1,
}));

export const fighterClass: DndCharClassDto = {
    ...entry,
    isCaster: false,
    hitDice: 10,
    levels,
    proficiences: {
        armor: [Armor.Light, Armor.Medium, Armor.Heavy, Armor.Shield],
        weapons: [Weapon.Simple, Weapon.Martial],
        savingThrows: [AbilityScore.Str, AbilityScore.Con],
    },
};
