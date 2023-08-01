/* 
 This is our controllers which will be used to connect our API to DB
 here you'll find the GET, PUT request and else if would be neccesary.
*/

/* Express */
import { Request, Response } from 'express';

/* Models */
import Card, { CardDoc } from '../models/cards';

/* Definitions */
import { CardType } from '../types';


// Route handler for /cards/all, this will help to post the cards in our DB. 
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

// Route handler to update votes, /cards/:cardId/vote/:type 
export const addVote = async (req: Request, res: Response) => {
  const { cardId, type } = req.params; // Assuming you are passing cardId and type ('positive' or 'negative') in the request parameters

  try {
    const card = await Card.findById(cardId);

    /* Error hanlder in case the card does not exist by ID or if the kind of vote wasn't provided */
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