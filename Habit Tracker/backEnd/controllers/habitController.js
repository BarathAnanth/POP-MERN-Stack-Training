import Habit from '../models/Habit.js';

export const updateHabitStatus = async (req, res) => {
  try {
    const { day } = req.body;
    const habit = await Habit.findById(req.params.id);
    
    if (!habit) return res.status(404).json({ error: 'Habit not found' });
    
    // Toggle the status for the specified day
    habit.status[day] = !habit.status[day];
    await habit.save();
    
    res.json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteHabit = async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Habit deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};