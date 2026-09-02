import { Router } from 'express';
import User from '../models/user.js';
const router = Router();
router.get('/', async (_request, response) => {
    try {
        response.json(await User.find().sort({ points: -1 }));
    }
    catch {
        response.status(500).json({ error: 'Unable to load users' });
    }
});
export default router;
