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
export const addVote = async (req: Request, res: Response) => {
  const { cardId, type } = req.params; // Assuming you are passing cardId and type ('positive' or 'negative') in the request parameters

  try {
    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({ error: 'Card not found.' });
    }

    if (type !== 'positive' && type !== 'negative') {
      return res.status(400).json({ error: 'Invalid vote type. Please provide either "positive" or "negative".' });
    }

    card.votes[type]++; // Increment the positive or negative votes based on the provided type
    await card.save();

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add vote.' });
  }
};


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