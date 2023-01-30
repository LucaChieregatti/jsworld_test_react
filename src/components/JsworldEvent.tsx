import { Card, CardBody, Text, Box } from '@chakra-ui/react';
import { EventsDataType } from '../types/types';

type JsworlsEventsProps={
    events:EventsDataType;
}

export const JsworldEvent = ({events}: JsworlsEventsProps)=>{
    return(
        <Card>
            <CardBody
            marginBottom= '2em'>
            <Box
                minH="300"
                maxW="800"
                backgroundColor= 'rgb(5,5,5)'
                borderRadius= '15px'>
            <Text
                color='red'
                marginTop='2em'
                marginLeft='2em'
                marginRight='2em'>{events.events.titolo}</Text>
            <Text
                color='white'
                marginTop='2em'
                marginLeft='2em'
                marginRight='2em'>{events.events.descrizione}</Text>
        </Box>
        </CardBody>
        </Card>
    )
}



