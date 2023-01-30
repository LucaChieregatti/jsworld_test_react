import { Card, CardBody, HStack, Text, Image, VStack, Box } from '@chakra-ui/react';
import { TracksDataType } from '../types/types';

type JsworlsTracksProps={
    tracks:TracksDataType 
}

export const Jsworld = ({tracks}: JsworlsTracksProps)=>{
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
                        {tracks.tracks.orario}</Text>
                    <Image 
                        src={tracks.tracks.immagine}
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
                            {tracks.tracks.titolo}</Text>
                        <Box>
                            <Text
                                color='white'
                                marginLeft='2em'
                                marginRight='2em'>
                                {tracks.tracks.descrizione}</Text>
                        </Box>
                    </VStack> 
                </HStack>
                </Box>
            </CardBody>
        </Card>
    )
}



