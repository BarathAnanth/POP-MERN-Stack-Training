import { useState } from 'react'
import HabitForm from '../components/HabitForm'
import Habit from '../components/Habit'

export default function Dashboard() {
  const [habits, setHabits] = useState([])

  const addHabit = (title) => {
    setHabits([...habits, { id: Date.now(), title, completed: false }])
  }

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ))
  }

  return (
    <div className="container">
      <h1 className="auth-title">My Habits</h1>
      <HabitForm onAddHabit={addHabit} />
      <div className="habits-list">
        {habits.map(habit => (
          <Habit 
            key={habit.id}
            habit={habit}
            onToggle={toggleHabit}
          />
        ))}
      </div>
    </div>
  )
}