import { Request, Response } from 'express';
import Card, { CardDoc } from '../models/cards';

import { CardType } from '../types';
// Route handler for /cards/all 



//Post controller to add all cards
export const postCards = async (cards: CardType[]): Promise<string | undefined> => {
    try {
        const insertedCards = await Card.insertMany(cards);
        console.log(insertedCards)
        return 'Exito'
      } catch (error) {
        console.log(error)
    }
}