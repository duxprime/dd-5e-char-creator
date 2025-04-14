export interface DndCharacterListEntryDto {
    id: string;
    characterName: string;
    playerName: string;
    links: {
        sheet: string;
    };
}

export type DndCharacterListDto = DndCharacterListEntryDto[];
