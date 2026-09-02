import { Router } from 'express';
import Workout from '../models/workout.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    response.json(await Workout.find().populate('assignedTo', 'name email'));
  } catch {
    response.status(500).json({ error: 'Unable to load workouts' });
  }
});

export default router;