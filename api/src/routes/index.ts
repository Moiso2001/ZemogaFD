import { Router } from 'express';

const router = Router();

// Get routes
router.get('/cards');

// Put routes
router.post('/cards/vote');

export default router;