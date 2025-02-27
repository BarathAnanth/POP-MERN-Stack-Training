export default function AuthForm({
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    buttonText
  }) {
    return (
      <form className="auth-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          {buttonText}
        </button>
      </form>
    )
  }