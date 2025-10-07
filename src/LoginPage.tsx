import React, { useState } from 'react'
import './LoginPage.css'

interface LoginPageProps {
  onLogin?: () => void
}

// Icons
const EyeIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
  </svg>
)

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Here you would typically handle authentication
      console.log('Login attempted with:', { email, password })
      if (onLogin) {
        onLogin()
      }
    }, 2000)
  }

  return (
    <div className="login-container">
      {/* Background Video */}
      <div className="login-background">
        <video 
          autoPlay 
          muted 
          loop 
          className="background-video"
        >
          <source src="/bsctube_first_yt_vid.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Login Form */}
      <div className="login-form-container">
        <div className="login-form">
          {/* BSCTUBE Logo */}
          <div className="login-logo">
            <img src="/favicon.png" alt="BSCTUBE" className="login-logo-img" />
            <h1 className="login-title">BSCTUBE</h1>
            <p className="login-subtitle">The Ultimate Crypto Video Platform</p>
          </div>

          {/* Funny Login Messages */}
          <div className="login-messages">
            <p className="funny-message">Ready to moon with crypto content?</p>
            <p className="funny-message">Diamond hands only!</p>
            <p className="funny-message">Your crypto journey starts here!</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="login-form-fields">
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email or Phone
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="login-divider">
              <span>or</span>
            </div>

            <div className="social-login">
              <button className="social-button google">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              
              <button className="social-button twitter">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Continue with X
              </button>
            </div>

            <div className="login-footer">
              <p>Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
              <p className="funny-footer">"Even my dog has a BSCTUBE account!"</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
