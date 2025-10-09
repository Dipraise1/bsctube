import React, { useState } from 'react'
import './LoginPage.css'

interface LoginPageProps {
  onLogin?: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      if (onLogin) {
        onLogin()
      }
    }, 1500)
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

          {/* Simple Enter Button */}
          <div className="simple-login-section">
            <button 
              onClick={handleLogin} 
              className="enter-button" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <div className="enter-button-content">
                  <img src="/favicon.png" alt="BSCTUBE Logo" className="enter-button-logo" />
                  <span>ENTER</span>
                </div>
              )}
            </button>
          </div>

          <div className="login-footer">
            <p className="funny-footer">"Even my dog has a BSCTUBE account!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage