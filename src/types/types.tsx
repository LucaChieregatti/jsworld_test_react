export type EventsDataType={
        id: number,
        events: {
            orario: string,
            titolo: string,
            descrizione: string,
            immagine: string
        }
}

export type TracksDataType={
        id: number,
        tracks: {
            immagineprofilo: string,
            nome: string,
            specializzazione: string,
            brevedescrizione: string
        }
}