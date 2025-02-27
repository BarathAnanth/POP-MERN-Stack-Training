import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError('Failed to login')
    }
  }

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        buttonText="Login"
      />
      <p className="text-center">
        Don't have an account?{' '}
        <Link to="/signup" className="nav-link">Signup here</Link>
      </p>
    </div>
  )
}