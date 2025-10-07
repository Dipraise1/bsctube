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

const VideoGrid: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'BSCTUBE Official Launch - The Future of Crypto Content',
      channel: 'Cz Palu',
      views: '1.2M views',
      time: '2 days ago',
      thumbnail: '/bsctube_intro.mp4',
      video: '/bsctube_intro.mp4'
    },
    {
      id: '2',
      title: 'How to Make Money with Crypto Videos - Complete Guide',
      channel: 'Cz Palu',
      views: '856K views',
      time: '1 week ago',
      thumbnail: '/bsctube_demo.mp4',
      video: '/bsctube_demo.mp4'
    },
    {
      id: '3',
      title: 'BSCTUBE Platform Demo - Revolutionary Features',
      channel: 'Cz Palu',
      views: '2.1M views',
      time: '3 days ago',
      thumbnail: '/bsctube_first_yt_vid.mp4',
      video: '/bsctube_first_yt_vid.mp4'
    },
    {
      id: '4',
      title: 'Top 10 Crypto Memes That Made Millions',
      channel: 'Cz Palu',
      views: '3.4M views',
      time: '5 days ago',
      thumbnail: '/bsctube_intro.mp4',
      video: '/bsctube_intro.mp4'
    },
    {
      id: '5',
      title: 'BSCTUBE vs YouTube - Which is Better?',
      channel: 'Cz Palu',
      views: '1.8M views',
      time: '1 week ago',
      thumbnail: '/bsctube_demo.mp4',
      video: '/bsctube_demo.mp4'
    },
    {
      id: '6',
      title: 'Creating Viral Crypto Content - Pro Tips',
      channel: 'Cz Palu',
      views: '945K views',
      time: '2 weeks ago',
      thumbnail: '/bsctube_first_yt_vid.mp4',
      video: '/bsctube_first_yt_vid.mp4'
    }
  ]

  return (
    <div className="video-grid-container">
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
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
              <div className="video-duration">5:23</div>
            </div>
            
            <div className="video-info">
              <div className="video-title">{video.title}</div>
              <div className="video-channel">{video.channel}</div>
              <div className="video-stats">
                {video.views} • {video.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoGrid
