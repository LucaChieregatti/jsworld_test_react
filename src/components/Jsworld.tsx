import { Card, CardBody, HStack, Text, Image, VStack, Box } from '@chakra-ui/react';
import { EventsDataType, TracksDataType } from '../types/types';

type JsworlsEventsProps={
    events:EventsDataType;
}

// type JsworlsTracksProps={
//     tracks:TracksDataType;
// }


export const Jsworld = ({events}: JsworlsEventsProps, /*{tracks}: JsworlsTracksProps*/)=>{
    return(
        <Card>
            <CardBody>
            <Box
            maxW="800"
            backgroundColor= 'rgb(5,5,5)'
            borderRadius= '15px'>
                <HStack>
                    
                    <Text>{events.events.orario}</Text>
                    <Image 
                        src={events.events.immagine}
                        maxWidth='100'
                        maxHeight='100'
                        marginLeft= 'auto'
                        marginRight= 'auto'
                        marginBottom= '3em'/>
                    <VStack>
                        <Text
                            color='red'
                            as='b'>{events.events.titolo}</Text>
                        <Text
                        color='white'>{events.events.descrizione}</Text>
                    </VStack>
                    
                   
                </HStack>
                </Box>
            </CardBody>
        </Card>
    )
}



