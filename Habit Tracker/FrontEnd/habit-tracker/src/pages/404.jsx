import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="auth-container">
      <h1 className="auth-title">404 - Page Not Found</h1>
      <p className="text-center">
        The page you're looking for doesn't exist.
        <br />
        <Link to="/" className="nav-link">Go back home</Link>
      </p>
    </div>
  )
}