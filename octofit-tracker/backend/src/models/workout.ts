import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    target: { type: String, required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export default model('Workout', workoutSchema);