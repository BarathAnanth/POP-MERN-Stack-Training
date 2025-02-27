export default function Habit({ habit, onToggle }) {
    return (
      <div className="habit-item">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
          className="habit-checkbox"
        />
        <span className={`habit-text ${habit.completed ? 'completed' : ''}`}>
          {habit.title}
        </span>
      </div>
    )
  }