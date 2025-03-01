import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

const ViewWeekly = () => {
  const [habits, setHabits] = useState([]);
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

  const toggleStatus = async (habitId, day) => {
    try {
      await axios.patch(`/api/habits/${habitId}`, { day });
      const { data } = await axios.get('/api/habits');
      setHabits(data);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getWeekDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - today.getDay() + i);
      days.push(date);
    }
    return days;
  };

  return (
    <div className="container mt-4">
      <h3 className="text-primary mb-4">Weekly Progress</h3>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-primary">
            <tr>
              <th>Habit</th>
              {getWeekDays().map((date, i) => (
                <th key={i} className="text-center">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  <br />
                  {date.getDate()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit._id}>
                <td>
                  <strong>{habit.name}</strong>
                  <small className="text-muted d-block">{habit.description}</small>
                </td>
                {getWeekDays().map((date, i) => {
                  const dayKey = date.toLocaleDateString('en-US', { weekday: 'long' });
                  const status = habit.status[dayKey];
                  return (
                    <td 
                      key={i} 
                      className="text-center clickable"
                      onClick={() => toggleStatus(habit._id, dayKey)}
                    >
                      {status ? (
                        <FaCheck className="text-success fs-4" />
                      ) : (
                        <FaTimes className="text-danger fs-4" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewWeekly;