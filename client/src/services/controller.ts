// Axios
import axios from "axios";

// Constants
import { BACKEND_URL } from "./constants";
import { TheCard } from "../types/card";

/* This controller will bring all the cards available on the DB */
export const getAllCards = async (): Promise<TheCard[]> => {
    try {
      /* BackEnd Get route */
        const response = await axios(`${BACKEND_URL}/cards/all`);

        const cards = response.data;
        return cards
    } catch (error) {
        console.error('Error fetchinig cards', error)
        return []
    }
}

/* This controller will handle adding votes to DB, negative and positives */
export const addVote = async (cardId: string, voteType: string): Promise<boolean> => {
    try {
      /* BackEnd Put route */
      await axios.put(`${BACKEND_URL}/cards/${cardId}/vote/${voteType}`);
  
      return true;
    } catch (error) {
      console.error('Error adding vote:', error);
      return false
    }
};
