export interface DndCharacterListEntry {
    id: string;
    characterName: string;
    playerName: string;
    links: {
        sheet: string;
    };
}

export type DndCharacterList = DndCharacterListEntry[];
