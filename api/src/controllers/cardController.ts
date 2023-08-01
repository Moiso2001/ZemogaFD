import { Request, Response } from 'express';
import Card, { CardDoc } from '../models/cards';

import { CardType } from '../types';

// Route handler for /cards/all 
export const getCards = async (req: Request, res: Response): Promise<void> => {
  try { 
    const cards: CardDoc[] = await Card.find();

    if(cards.length === 0){
      res.json({message: "No cards available"});
    }

    res.json(cards)  
  } catch (error) {
    res.status(500).json({message: 'An error ocurred on DB'})
  }
} 

// Route handler to update votes
export const putVote = async (req: Request, res: Response): Promise<void> => {
  try {
    
  } catch (error) {
    
  }
}


//Post controller to add all cards (this was used just one time to add the cards to the db)
export const postCards = async (cards: CardType[]): Promise<string | undefined> => {
    try {
        const insertedCards = await Card.insertMany(cards);
        console.log(insertedCards)
        return 'Exito'
      } catch (error) {
        console.log(error)
    }
}