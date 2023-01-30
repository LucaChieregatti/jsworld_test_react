import axios from "axios";

export const getEvents = async () => {
    const response = await axios.get('http://localhost:3090/jsworldconf');

    return response.data;
}

export const getTracks = async () => {
    const response = await axios.get('http://localhost:3090/jsworldspeaker');

    return response.data;
}