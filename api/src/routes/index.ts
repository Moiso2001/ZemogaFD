import { Router } from 'express';
import { getCards, addVote } from '../controllers/cardController';

const router = Router();

// Get routes
router.get('/cards/all', getCards);

// Put routes
router.put('/cards/:cardId/vote/:type', addVote);

export default router;