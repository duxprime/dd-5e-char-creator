import { DndClassFeatureDto } from '../dto/class.dto.js';

export const abilityScoreImprovement: DndClassFeatureDto = {
    id: crypto.randomUUID(),
    name: 'Ability Score Improvement',
    description: `Upon reaching certain levels, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
};
