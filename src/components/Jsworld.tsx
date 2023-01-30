import { Box, Card, CardBody, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { SingleTrackType } from '../types/types';

type JsworlsTracksProps={
    track : SingleTrackType
}

export const Jsworld = ({track}: JsworlsTracksProps)=>{
    return(
        <Card>
            <CardBody
            marginBottom= '2em'>
            <Box
                minH="200"
                maxW="800"
                backgroundColor= 'rgb(5,5,5)'
                borderRadius= '15px'>
                <HStack >
                    <Text
                        color='white'
                        marginLeft='2em'
                        marginRight='2em'>
                        {track.orario}</Text>
                    <Image 
                        borderRadius= '15px'
                        src={track.immagine}
                        maxWidth='200'
                        maxHeight='200'
                        marginLeft= 'auto'
                        marginRight= 'auto'/>
                    <VStack>
                        <Text
                            marginTop= '1em'
                            marginBottom= '1em'
                            color='red'
                            as='b'>
                            {track.titolo}</Text>
                        <Box>
                            <Text
                                color='white'
                                marginLeft='2em'
                                marginRight='2em'>
                                {track.descrizione}</Text>
                        </Box>
                    </VStack> 
                </HStack>
                </Box>
            </CardBody>
        </Card>
    )
}



