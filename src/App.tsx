import React, { useState } from 'react'
import './App.css'
import logoImage from './assets/logo.png'
import LoginPage from './LoginPage'
import VideoGrid from './VideoGrid'
import ProfileSelection from './ProfileSelection'
import VideoPlayer from './VideoPlayer'

// Icons as SVG components
const HomeIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
)


const PlayCircleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
)

const SearchIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
)

const UserIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
)

const TelegramIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.07-.2-.05-.28-.03-.12.03-2.01 1.28-5.68 3.76-.54.38-1.03.57-1.47.56-.49-.01-1.43-.28-2.13-.51-.86-.28-1.54-.43-1.48-.9.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.98-3.44 3.76-1.6 4.54-1.88 5.05-1.88.12 0 .38.03.55.18.14.12.18.28.2.4-.01.06.01.24 0 .38z"/>
  </svg>
)

const XIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const MenuIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
)

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showProfileSelection, setShowProfileSelection] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [showP2PPopup, setShowP2PPopup] = useState(false)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)

  const handleProfileClick = () => {
    setShowProfile(!showProfile)
  }

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    setShowProfile(false) // Close profile dropdown when changing pages
  }

  const handleP2PClick = () => {
    setShowP2PPopup(true)
  }

  const handleCloseP2P = () => {
    setShowP2PPopup(false)
  }

  const handleVideoClick = () => {
    setShowVideoPlayer(true)
  }

  const handleBackToHome = () => {
    setShowVideoPlayer(false)
  }

  const handleProfileSelect = (profile: any) => {
    setSelectedProfile(profile)
    setShowProfileSelection(false)
    setIsLoggedIn(true)
  }

  // Show login page if not logged in
  if (!isLoggedIn && !showProfileSelection) {
    return <LoginPage onLogin={() => setShowProfileSelection(true)} />
  }

  // Show profile selection after login
  if (showProfileSelection) {
    return <ProfileSelection onProfileSelect={handleProfileSelect} />
  }

  // Show video player when video is clicked
  if (showVideoPlayer) {
    return (
      <div className="video-player-page">
        <button className="back-to-home-btn" onClick={handleBackToHome}>
          ← Back to Home
        </button>
        <VideoPlayer />
      </div>
    )
  }

  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo">
          <img src={logoImage} alt="BSCTUBE Logo" className="logo-image" />
          <div className="logo-text">BSCTUBE</div>
        </div>

        {/* Navigation */}
        <div>
          <a href="#" className="nav-item">
            <HomeIcon />
            Home
          </a>
          <a href="#" className="nav-item">
            <PlayCircleIcon />
            Play Now
          </a>
        </div>

        {/* Socials */}
        <div>
          <div className="section-title">SOCIALS</div>
          <div className="social-links">
            <a href="https://t.me/bsctube" target="_blank" rel="noopener noreferrer" className="social-link">
              <TelegramIcon />
              Telegram
            </a>
            <a href="https://x.com/bsctube" target="_blank" rel="noopener noreferrer" className="social-link">
              <XIcon />
              Our X
            </a>
          </div>
        </div>

        {/* Subscriptions */}
        <div>
          <div className="section-title">SUBSCRIPTIONS</div>
          <div className="subscriptions">
            <span>...</span>
          </div>
        </div>

        {/* Spacer to push Buy Now button to bottom */}
        <div style={{ flex: 1 }}></div>

        {/* Buy Now Button */}
        <button className="btn-yellow">
          Buy now
        </button>
      </div>

      {/* Mobile Header - only visible on mobile */}
      <div className="mobile-header">
        <div className="mobile-logo">
          <img src={logoImage} alt="BSCTUBE Logo" className="logo-image" />
          <div className="logo-text">BSCTUBE</div>
        </div>
        
        <div className="mobile-search-container">
          <input 
            type="text" 
            placeholder="Search" 
            className="mobile-search-bar"
          />
          <button className="btn-gray-round">
            <SearchIcon />
          </button>
            <button className="btn-yellow p2p-button" onClick={handleP2PClick}>
              P2E
            </button>
          <button className="btn-gray-round profile-icon-btn" onClick={handleProfileClick}>
            <img src={selectedProfile ? selectedProfile.avatar : '/cz photo.jpg'} alt={selectedProfile ? selectedProfile.name : 'Cz'} className="profile-icon-image" />
          </button>
        </div>
      </div>

      {/* Mobile Profile Dropdown */}
      {showProfile && (
        <div className="mobile-profile-dropdown">
          <div className="profile-info">
            <div className="profile-avatar">
              {selectedProfile ? (
                <img src={selectedProfile.avatar} alt={selectedProfile.name} className="profile-dropdown-image" />
              ) : (
                'CP'
              )}
            </div>
            <div className="profile-name">
              {selectedProfile ? selectedProfile.name : 'Cz'}
            </div>
            <div className="profile-characters">4 characters</div>
          </div>
        </div>
      )}

      {/* Mobile Social Links - only visible on mobile */}
      <div className="mobile-social-section">
        <div className="mobile-social-links">
          <a href="https://t.me/bsctube" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
            <TelegramIcon />
          </a>
          <a href="https://x.com/bsctube" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
            <XIcon />
          </a>
          <button className="btn-yellow mobile-buy-btn">
            Buy now
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '600px', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search" 
                className="search-bar-large"
              />
              <button className="btn-gray-round">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="btn-yellow p2p-button" onClick={handleP2PClick}>
              P2E
            </button>
            <button className="btn-gray-round profile-icon-btn" onClick={handleProfileClick}>
              <img src={selectedProfile ? selectedProfile.avatar : '/cz photo.jpg'} alt={selectedProfile ? selectedProfile.name : 'Cz'} className="profile-icon-image" />
            </button>
            {showProfile && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <div className="profile-avatar">
                    {selectedProfile ? (
                      <img src={selectedProfile.avatar} alt={selectedProfile.name} className="profile-dropdown-image" />
                    ) : (
                      'CP'
                    )}
                  </div>
                  <div className="profile-name">
                    {selectedProfile ? selectedProfile.name : 'Cz'}
                  </div>
                  <div className="profile-characters">4 characters</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {currentPage === 'home' && <VideoGrid onVideoClick={handleVideoClick} />}
          {currentPage === 'shorts' && (
            <div className="coming-soon-page">
              <div className="coming-soon">
                Coming soon
              </div>
            </div>
          )}
          {currentPage === 'profile' && (
            <div className="profile-page">
              <div className="profile-section">
                <h2 className="profile-section-title">Profile Settings</h2>
                <div className="profile-details">
                  <div className="profile-avatar-large">
                    <img src={selectedProfile ? selectedProfile.avatar : '/cz photo.jpg'} alt={selectedProfile ? selectedProfile.name : 'Cz'} className="profile-large-image" />
                  </div>
                  <div className="profile-info-large">
                    <h3 className="profile-name-large">{selectedProfile ? selectedProfile.name : 'Cz'}</h3>
                    <p className="profile-characters-large">4 characters</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Trending */}
      <div className="trending-sidebar">
        <div className="section-title">Trending</div>
        
        <div className="trending-item">
          <div className="trending-content">
            <div className="trending-category">Crypto Trending</div>
            <div className="trending-title">Youtube</div>
            <div className="trending-stats">69k videos</div>
          </div>
          <div className="trending-menu">
            <MenuIcon />
          </div>
        </div>

        <div className="trending-item">
          <div className="trending-content">
            <div className="trending-category">Crypto Trending</div>
            <div className="trending-title">Bullish</div>
            <div className="trending-stats">42k videos</div>
          </div>
          <div className="trending-menu">
            <MenuIcon />
          </div>
        </div>

        <div className="trending-item">
          <div className="trending-content">
            <div className="trending-category">Crypto Trending</div>
            <div className="trending-title">BSC</div>
            <div className="trending-stats">35k videos</div>
          </div>
          <div className="trending-menu">
            <MenuIcon />
          </div>
        </div>
      </div>

      {/* Mobile Navigation - YouTube style */}
      <div className="mobile-nav">
        <button 
          className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handlePageChange('home')}
        >
          <HomeIcon />
          <span>Home</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === 'shorts' ? 'active' : ''}`}
          onClick={() => handlePageChange('shorts')}
        >
          <PlayCircleIcon />
          <span>Shorts</span>
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === 'profile' ? 'active' : ''}`}
          onClick={() => handlePageChange('profile')}
        >
          <UserIcon />
          <span>Profile</span>
        </button>
      </div>

      {/* P2P Popup */}
      {showP2PPopup && (
        <div className="p2p-popup-overlay" onClick={handleCloseP2P}>
          <div className="p2p-popup" onClick={(e) => e.stopPropagation()}>
            <div className="p2p-popup-header">
              <h2 className="p2p-popup-title">Play-to-Earn</h2>
              <button className="p2p-close-btn" onClick={handleCloseP2P}>
                ×
              </button>
            </div>
            <div className="p2p-popup-content">
              <div className="p2p-coming-soon">
                Play to earn🙏
              </div>
              <p className="p2p-description">
                Play-to-earn features will be available soon!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
