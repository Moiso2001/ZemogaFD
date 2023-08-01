import { Router } from 'express';
import { getCards } from '../controllers/cardController';

const router = Router();

// Get routes
router.get('/cards/all', getCards);

// Put routes


export default router;