import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Team from '../models/team.js';
import User from '../models/user.js';
import Workout from '../models/workout.js';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await connectDatabase();
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            Leaderboard.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        const users = await User.insertMany([
            { name: 'Alex Morgan', email: 'alex@octofit.test', avatar: 'AM', points: 1280 },
            { name: 'Jordan Lee', email: 'jordan@octofit.test', avatar: 'JL', points: 1140 },
            { name: 'Sam Rivera', email: 'sam@octofit.test', avatar: 'SR', points: 980 },
        ]);
        await Team.insertMany([
            { name: 'Peak Performers', motto: 'Small steps, strong finish.', members: [users[0]._id, users[1]._id] },
            { name: 'Morning Momentum', motto: 'Show up and move forward.', members: [users[2]._id] },
        ]);
        await Activity.insertMany([
            { user: users[0]._id, type: 'Run', durationMinutes: 32, calories: 310, completedAt: new Date('2026-09-01T07:30:00Z') },
            { user: users[1]._id, type: 'Strength', durationMinutes: 45, calories: 280, completedAt: new Date('2026-08-31T18:00:00Z') },
            { user: users[2]._id, type: 'Cycling', durationMinutes: 50, calories: 420, completedAt: new Date('2026-08-30T08:15:00Z') },
        ]);
        await Leaderboard.insertMany([
            { user: users[0]._id, rank: 1, score: 1280, streak: 12 },
            { user: users[1]._id, rank: 2, score: 1140, streak: 9 },
            { user: users[2]._id, rank: 3, score: 980, streak: 7 },
        ]);
        await Workout.insertMany([
            { title: 'Core Reset', category: 'Core', difficulty: 'Beginner', durationMinutes: 20, target: 'Core stability', assignedTo: users[0]._id },
            { title: 'Power Circuit', category: 'Strength', difficulty: 'Intermediate', durationMinutes: 35, target: 'Full body strength', assignedTo: users[1]._id },
            { title: 'Cardio Flow', category: 'Cardio', difficulty: 'Intermediate', durationMinutes: 30, target: 'Endurance', assignedTo: users[2]._id },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
