import React, {useCallback} from "react";
import { getEvents, getTracks } from "../api/jsworldController";

export const useEvents = () =>{
    const[data, setData] = React.useState<any[]>();
    const execute = async() => {
        const events = await getEvents();
        setData(events);
        return events;
    };
    return{
        data,
        execute: useCallback(execute, [])
    };
};

export const useTracks = () =>{
    const[data2, setData2] = React.useState<any[]>();
    const execute2 = async() => {
        const tracks = await getTracks();
        setData2(tracks);
        return tracks;
    };
    return{
        data2,
        execute2: useCallback(execute2, [])
    };
}
