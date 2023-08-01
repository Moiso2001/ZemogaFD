// Axios
import axios from "axios";

// Constants
import { BACKEND_URL } from "./constants";
import { TheCard } from "../../types/card";

/* This controller will bring all the cards available on the DB */
export const getAllCards = async (): Promise<TheCard[]> => {
    try {
        const response = await axios(`${BACKEND_URL}/cards/all`);

        const cards = response.data;
        return cards
    } catch (error) {
        console.error('Error fetchinig cards', error)
        return []
    }
}

/* This controller will handle the put of the votes, negative and positives */
export const addVote = async (cardId: string, voteType: string): Promise<boolean> => {
    try {
      await axios.put(`${BACKEND_URL}/cards/${cardId}/vote/${voteType}`);
  
      return true;
    } catch (error) {
      console.error('Error adding vote:', error);
      return false
    }
  };
