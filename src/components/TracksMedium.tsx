import { Box,Text } from "@chakra-ui/react";
import { TracksDataType } from "../types/types"
import { Jsworld } from "./Jsworld";

type TracksMediumProps = {
    tracks : TracksDataType;
}

export const TracksMedium = (props : TracksMediumProps) => {
    return (
        <Box>
            <Text
                textShadow='3px 3px #8b0000'
                fontSize='3em'
                color='red'>{props.tracks.date}</Text>
            {props.tracks.tracks.map(item => <Jsworld track={item} key={item.id}/>)}
        </Box>
    )
}