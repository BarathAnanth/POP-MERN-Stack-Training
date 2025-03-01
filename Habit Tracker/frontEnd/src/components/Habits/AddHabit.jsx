import React, { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

const AddHabit = () => {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const { data } = await axios.get('/api/habits');
        setHabits(data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };
    if (user) fetchHabits();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`/api/habits/${editId}`, { name: habit, description });
        setEditId(null);
      } else {
        await axios.post('/api/habits', { name: habit, description });
      }
      setHabit('');
      setDescription('');
      const { data } = await axios.get('/api/habits');
      setHabits(data);
    } catch (error) {
      console.error('Error saving habit:', error);
    }
  };

  const deleteHabit = async (id) => {
    try {
      await axios.delete(`/api/habits/${id}`);
      setHabits(habits.filter(h => h._id !== id));
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-primary mb-4">Track Your Habits</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Habit name"
              value={habit}
              onChange={(e) => setHabit(e.target.value)}
              required
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              {editId ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </form>

      <div className="list-group">
        {habits.map((habit) => (
          <div key={habit._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{habit.name}</h5>
              <small className="text-muted">{habit.description}</small>
            </div>
            <div>
              <button 
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => {
                  setHabit(habit.name);
                  setDescription(habit.description);
                  setEditId(habit._id);
                }}
              >
                <AiOutlineEdit />
              </button>
              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteHabit(habit._id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddHabit;