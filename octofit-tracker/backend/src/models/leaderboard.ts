import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    rank: { type: Number, required: true },
    score: { type: Number, required: true },
    streak: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model('Leaderboard', leaderboardSchema);