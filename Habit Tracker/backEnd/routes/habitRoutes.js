// filepath: /d:/HOPE/MERN Stack Training/Habit Tracker/backEnd/routes/habitRoutes.js
import express from 'express';
import Habit from '../models/Habit.js';

const router = express.Router();

// Get all habits for logged-in user
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.userId });
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new habit
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    const newHabit = new Habit({
      user: req.userId,
      name,
      description,
      status: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
      },
    });

    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update habit status for specific day
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { day } = req.body;

    const habit = await Habit.findOne({
      _id: id,
      user: req.userId,
    });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    // Toggle the status for the specified day
    habit.status[day] = !habit.status[day];
    await habit.save();

    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a habit
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const habit = await Habit.findOneAndDelete({
      _id: id,
      user: req.userId,
    });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    res.status(200).json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;