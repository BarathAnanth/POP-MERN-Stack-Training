import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">Habit Tracker</Link>
        {user ? (
          <button 
            onClick={logout}
            className="nav-link"
          >
            <ArrowRightOnRectangleIcon className="icon" />
            Logout
          </button>
        ) : (
          <div className="navbar-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  )
}