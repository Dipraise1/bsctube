import React from 'react'
import './VideoGrid.css'

interface VideoItem {
  id: string
  title: string
  channel: string
  views: string
  time: string
  thumbnail: string
  video: string
}

interface VideoGridProps {
  onVideoClick?: () => void
}

const VideoGrid: React.FC<VideoGridProps> = ({ onVideoClick }) => {
  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'Intro',
      channel: 'Cz Palu',
      views: '',
      time: 'Today',
      thumbnail: '/bsctube_demo.mp4',
      video: '/bsctube_demo.mp4'
    },
    {
      id: '2',
      title: 'Mr Beast',
      channel: 'Cz Palu',
      views: '',
      time: 'Coming Soon',
      thumbnail: '/bsctube_intro.mp4',
      video: '/bsctube_intro.mp4'
    }
  ]

  return (
    <div className="video-grid-container">
      <div className="video-grid">
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className={`video-card ${index === 0 ? 'clickable' : 'non-clickable'}`}
            onClick={index === 0 ? onVideoClick : undefined}
          >
            <div className="video-thumbnail">
              <video 
                className="thumbnail-video"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              >
                <source src={video.video} type="video/mp4" />
              </video>
              {index === 0 && <div className="video-duration">5:23</div>}
            </div>
            
            <div className="video-info">
              <div className="video-title">{video.title}</div>
              <div className="video-stats">
                {video.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoGrid
