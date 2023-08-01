// Axios
import axios from "axios";

// Constants
import { BACKEND_URL } from "./constants";
import dataArray from "../../assets/temporal";
import { TheCard } from "../../types/card";

export const getAllCards = async (): Promise<TheCard[]> => {
    try {
        const response = await axios(`${BACKEND_URL}/cards/all`);

        const cards = response.data;
        return cards
    } catch (error) {
        console.log('Error fetchinig cards', error)
        return dataArray
    }
}
