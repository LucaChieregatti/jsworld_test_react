export type EventsDataType={
    id: number,
    events: {
        titolo: string,
        descrizione: string
    }
}

export type TracksDataType={
        id: number,
        tracks: {
            orario: string,
            titolo: string,
            descrizione: string,
            immagine: string
        }
}

export type SpeakerDataType={
        id: number,
        speaker: {
            immagineprofilo: string,
            nome: string,
            specializzazione: string,
            brevedescrizione: string
        }
}