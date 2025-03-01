import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    Monday: { type: Boolean, default: false },
    Tuesday: { type: Boolean, default: false },
    Wednesday: { type: Boolean, default: false },
    Thursday: { type: Boolean, default: false },
    Friday: { type: Boolean, default: false },
    Saturday: { type: Boolean, default: false },
    Sunday: { type: Boolean, default: false },
  },
});

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;