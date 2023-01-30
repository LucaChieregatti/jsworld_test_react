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
                minH="400"
                marginLeft='5em'
                marginRight='5em'
                textAlign='center'
                backgroundColor= 'rgb(5,5,5)'
                borderRadius= '15px'>
            <Text
                textShadow='3px 3px #8b0000'
                fontSize='3em'
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



