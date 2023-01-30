export type EventsDataType = {
    id: number,
    events: {
        titolo: string,
        descrizione: string
    }
}

export type TracksDataType = {
    id: number,
    date : string,
    tracks: SingleTrackType[] 

}

export type SingleTrackType = {
    id: number,
    orario: string,
    titolo: string,
    descrizione: string,
    immagine: string
}

export type SpeakerDataType = {
    id: number,
    speaker: {
        immagineprofilo: string,
        nome: string,
        specializzazione: string,
        brevedescrizione: string
    }
}