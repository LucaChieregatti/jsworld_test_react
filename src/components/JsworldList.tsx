import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useEvents, useTracks } from '../hooks/useEventsTracks';
import { Jsworld } from './Jsworld';

export const JsworldList = () => {
    const {data, execute} = useEvents();
    // const {data2, execute2} = useTracks();
    useEffect(()=>{
        execute();
    }, [execute]);
    // useEffect(()=>{
    //     execute2();
    // }, [execute2]);
    return(
        <VStack>
            {data && data.map(item => <Jsworld events={item} key={item.id}/>)};
            {/*data2 && data2.map(item2 => <Jsworld tracks={item2} key={item2.id}/>)*/};
        </VStack>
    )
}