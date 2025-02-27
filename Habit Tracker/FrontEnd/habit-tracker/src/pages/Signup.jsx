import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(email, password)
      navigate('/')
    } catch (err) {
      setError('Failed to create account')
    }
  }

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        buttonText="Sign Up"
      />
      <p className="text-center">
        Already have an account?{' '}
        <Link to="/login" className="nav-link">Login here</Link>
      </p>
    </div>
  )
}