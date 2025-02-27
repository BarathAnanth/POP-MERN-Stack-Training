import { useState } from 'react'

export default function HabitForm({ onAddHabit }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAddHabit(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <div className="habit-input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new habit"
          className="habit-input"
        />
        <button
          type="submit"
          className="form-button"
        >
          Add Habit
        </button>
      </div>
    </form>
  )
}