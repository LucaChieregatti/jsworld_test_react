import { HStack, VStack, Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTracks, useSpeaker, useEvents } from '../hooks/useEventsTracks';
import { Jsworld } from './Jsworld';
import { JsworldSpeaker } from './JsworldSpeaker';
import { JsworldEvent } from './JsworldEvent';
import { TracksMedium } from './TracksMedium';

export const JsworldList = () => {
    const {data3, execute3} = useEvents();
    const {data, execute} = useTracks();
    const {data2, execute2} = useSpeaker();
    useEffect(()=>{
        execute3();
     }, [execute3]);
    useEffect(()=>{
        execute();
    }, [execute]);
    useEffect(()=>{
        execute2();
     }, [execute2]);
  
const listaTracks=Array.from(data)

    return(
        <Box>
            <VStack>
                {/* <Text color='red' textShadow='4px 4px #000000' fontSize='4em'>Events</Text> */}
                {data3 && data3.map(item3 => <JsworldEvent events={item3} key={item3.id}/>)};
            </VStack>
            <VStack>
                {/* <Text color='red' textShadow='4px 4px #000000' fontSize='4em'>Tracks</Text> */}

                {listaTracks.map(item => <TracksMedium tracks={item} key={item.id}/>)};
            </VStack>
            <Text color='red' textShadow='4px 4px #000000' fontSize='4em' textAlign='center'>Speaker</Text>
            <HStack spacing='2em'  margin='10em'>
                {data2 && data2.map(item2 => <JsworldSpeaker speaker={item2} key={item2.id}/>)};
            </HStack>
            
        </Box>
        
    )
}
