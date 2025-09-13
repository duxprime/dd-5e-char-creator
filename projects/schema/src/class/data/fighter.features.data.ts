import { DndClassFeatureDto } from '../dto/class.dto.js';

export const actionSurge: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Action Surge',
    description: `Starting at 2nd leveI, Yotlcan push yourself beyond your normal limits for a moment. On your turn, you can take
one additional action on top of your regular action and a possible bonus action.

Once you use this feature, you must finish a short or long rest before you can use it again.Starting at 17th
levei, you can use it twice before a rest, but only once on the same turn.`,
};

export const extraAttack: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Extra Attack',
    description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the attack action on your turn.
    
    The number of attacks increases to three when you reach 11th level in this c1ass and to four when you reach 20th level in this c1ass.`,
};

export const fightingStyle: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Fighting Style',
    description: `You adopt a particular style of fighting as your specialty.

Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

Archery

Defense

Duelling

Great Weapon Fighting

Protection

Two-Weapon Fighting`,
};

export const indomitable: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Indomitable',
    description: `Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.

You can use this feature twice between long rests starting at 13th levei and three times between long rests starting at 17th level.`,
};

export const secondWind: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Second Wind',
    description: `You have a limited well of stamina that you can draw on to protect YOtlrself from harm. On your turn, you can use
a bonus action to regain hit points equal to ld10 + your fighter level.

Once you use this feature, you must finish a short or long rest before you can use it again.`,
};

export const martialArchetype: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Martial Archetype',
    description: `At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques.
    
    Different fighters choose different approaches to perfecting their fighting prowess. The martial archetype you choose to emulate reflects your approach. Choose Champion, Battle Master, or Eldritch Knight.
    `,
};

export const martialArchetypeFeature: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Martial Archetype feature',
    description: `The archetype you chose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.`,
};
