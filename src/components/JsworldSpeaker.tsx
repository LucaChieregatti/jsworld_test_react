import { Card, CardBody, Text, Image, VStack, Box } from '@chakra-ui/react';
import { SpeakerDataType } from '../types/types';

type JsworlsSpeakerProps={
    speaker:SpeakerDataType;
}

export const JsworldSpeaker = ({speaker}: JsworlsSpeakerProps)=>{
    return(
        <Card>
            <CardBody
            marginBottom= '2em'>
            <Box
                minH="300"
                maxW="200"
                backgroundColor= 'rgb(5,5,5)'
                borderRadius= '15px'>
                <VStack>
                    <Image 
                        src={speaker.speaker.immagineprofilo}
                        borderRadius= '15px'
                        maxWidth='100'
                        maxHeight='100'
                        marginTop= '1em'
                        marginLeft= 'auto'
                        marginRight= 'auto'/>
                    <Text
                        color='white'
                        marginLeft='2em'
                        marginRight='2em'>
                        {speaker.speaker.nome}</Text>
                    <Text
                        color='red'
                        marginLeft='2em'
                        marginRight='2em'>
                        {speaker.speaker.specializzazione}</Text>
                    <Box>
                    <Text
                        color='white'
                        marginLeft='2em'
                        marginRight='2em'>
                        {speaker.speaker.brevedescrizione}</Text>
                    </Box>
                </VStack>
                </Box>
            </CardBody>
        </Card>
    )
}



