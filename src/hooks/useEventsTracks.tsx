import React, {useCallback} from "react";
import { getEvents, getTracks, getSpeaker } from "../api/jsworldController";
import { TracksDataType, SpeakerDataType, EventsDataType } from "../types/types";

export const useEvents = () =>{
    const[data3, setData3] = React.useState<EventsDataType[]>();
    const execute3 = async() => {
        const events = await getEvents();
        setData3(events);
        return events;
    };
    return{
        data3,
        execute3: useCallback(execute3, [])
    };
};

export const useTracks = () =>{
    const[data, setData] = React.useState<TracksDataType[]>({} as TracksDataType[]);
    const execute = async() => {
        const tracks = await getTracks();
        setData(tracks);
        return tracks;
    };
    return{
        data,
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
