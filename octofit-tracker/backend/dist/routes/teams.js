import { Router } from 'express';
import Team from '../models/team.js';
const router = Router();
router.get('/', async (_request, response) => {
    try {
        response.json(await Team.find().populate('members', 'name email avatar'));
    }
    catch {
        response.status(500).json({ error: 'Unable to load teams' });
    }
});
export default router;
