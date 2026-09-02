import { Router } from 'express';
import Activity from '../models/activity.js';
const router = Router();
router.get('/', async (_request, response) => {
    try {
        response.json(await Activity.find().populate('user', 'name email').sort({ completedAt: -1 }));
    }
    catch {
        response.status(500).json({ error: 'Unable to load activities' });
    }
});
export default router;
