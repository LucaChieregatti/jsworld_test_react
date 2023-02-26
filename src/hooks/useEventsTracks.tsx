import React, {useCallback} from "react";
import { getEvents, getTracks, getSpeaker } from "../api/jsworldController";
import { TracksDataType, SpeakerDataType, EventsDataType } from "../types/types";
import { useQuery } from "react-query";


export const useEvents = () =>{
    const { data } = useQuery('listaEvents', getEvents)
    return { data }
};

export const useTracks = () =>{
    const[data1, setData] = React.useState<TracksDataType[]>({} as TracksDataType[]);
    const execute = async() => {
        const tracks = await getTracks();
        setData(tracks);
        return tracks;
    };
    return{
        data1,
        execute: useCallback(execute, [])
    };
};

export const useSpeaker = () =>{
    const[data2, setData2] = React.useState<SpeakerDataType[]>();
    const execute2 = async() => {
        const speaker = await getSpeaker();
        setData2(speaker);
        return speaker;
    };
    return{
        data2,
        execute2: useCallback(execute2, [])
    };
}
