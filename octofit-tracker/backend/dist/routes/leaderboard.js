import { Router } from 'express';
import Leaderboard from '../models/leaderboard.js';
const router = Router();
router.get('/', async (_request, response) => {
    try {
        response.json(await Leaderboard.find().populate('user', 'name avatar').sort({ rank: 1 }));
    }
    catch {
        response.status(500).json({ error: 'Unable to load leaderboard' });
    }
});
export default router;
