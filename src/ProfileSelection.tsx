import React from 'react'
import './ProfileSelection.css'

interface Profile {
  id: string
  name: string
  avatar: string
  isMain?: boolean
}

interface ProfileSelectionProps {
  onProfileSelect: (profile: Profile) => void
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onProfileSelect }) => {
  const profiles: Profile[] = [
    {
      id: '1',
      name: 'Cz',
      avatar: '/cz photo.jpg',
      isMain: true
    },
    {
      id: '2',
      name: 'Broccoli',
      avatar: '/brocolli photo.jpg'
    },
    {
      id: '3',
      name: 'Palu',
      avatar: '/palu.jpg'
    }
  ]

  return (
    <div className="profile-selection-container">
      {/* Background Video */}
      <div className="profile-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/bsctube_first_yt_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="profile-selection-content">
        <div className="profile-header">
          <img src="/src/assets/logo.png" alt="BSCTUBE Logo" className="profile-logo" />
          <h1 className="profile-title handwritten-bold">BSCTUBE</h1>
          <p className="profile-subtitle handwritten">Who's watching?</p>
        </div>

        <div className="profiles-grid">
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              className={`profile-card ${profile.isMain ? 'main-profile' : ''}`}
              onClick={() => onProfileSelect(profile)}
            >
              <div className="profile-avatar">
                <img src={profile.avatar} alt={profile.name} className="profile-image" />
              </div>
              <div className="profile-name">{profile.name}</div>
              {profile.isMain && (
                <div className="main-badge">Main</div>
              )}
            </div>
          ))}
        </div>

        <div className="profile-actions">
          <button className="manage-profiles-btn handwritten">
            Manage Profiles
          </button>
        </div>

        <div className="profile-footer">
          <p className="handwritten">Choose your crypto journey!</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileSelection
