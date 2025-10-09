import React, { useState } from 'react'
import './VideoPlayer.css'

interface Comment {
  id: string
  author: string
  avatar: string
  text: string
  time: string
  likes: number
  replies?: Comment[]
}

const VideoPlayer: React.FC = () => {
  const [showComments, setShowComments] = useState(true)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'CryptoKing',
      avatar: '/cz photo.jpg',
      text: 'This is amazing! BSCTUBE is going to revolutionize crypto content! 🚀',
      time: '2 hours ago',
      likes: 42,
      replies: [
        {
          id: '1-1',
          author: 'Cz Palu',
          avatar: '/cz photo.jpg',
          text: 'Thank you! We\'re excited to build this community together!',
          time: '1 hour ago',
          likes: 8
        }
      ]
    },
    {
      id: '2',
      author: 'BlockchainBro',
      avatar: '/palu.jpg',
      text: 'Finally, a platform that understands crypto creators! This is the future!',
      time: '3 hours ago',
      likes: 28
    },
    {
      id: '3',
      author: 'DeFiDiva',
      avatar: '/brocolli photo.jpg',
      text: 'The intro video is so well made! Can\'t wait for more content!',
      time: '4 hours ago',
      likes: 15
    },
    {
      id: '4',
      author: 'MoonBoy',
      avatar: '/cz photo.jpg',
      text: 'BSCTUBE to the moon! 🚀🌙 This is going to be huge!',
      time: '5 hours ago',
      likes: 31
    }
  ])

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'You',
        avatar: '/cz photo.jpg',
        text: newComment,
        time: 'now',
        likes: 0
      }
      setComments([comment, ...comments])
      setNewComment('')
    }
  }

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ))
  }

  return (
    <div className="video-player-container">
      <div className="video-player-main">
        <div className="video-wrapper">
          <video 
            className="main-video"
            controls
            autoPlay
            muted
          >
            <source src="/bsctube_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="video-info-section">
          <h1 className="video-title">Intro</h1>
          <div className="video-meta">
            <div className="channel-info">
              <img src="/cz photo.jpg" alt="Cz Palu" className="channel-avatar" />
              <div className="channel-details">
                <h3 className="channel-name">Cz Palu</h3>
                <p className="subscriber-count">1.2M subscribers</p>
              </div>
            </div>
            <div className="video-actions">
              <button className="subscribe-btn">Subscribe</button>
              <button className="like-btn">👍 Like</button>
              <button className="share-btn">Share</button>
            </div>
          </div>
          <div className="video-description">
            <p>Welcome to BSCTUBE - The Ultimate Crypto Video Platform! This is just the beginning of something amazing. Join us on this journey to revolutionize crypto content creation! 🚀</p>
          </div>
        </div>
      </div>

      <div className="comments-section">
        <div className="comments-header">
          <h3>Comments ({comments.length})</h3>
          <button 
            className="sort-btn"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? 'Hide' : 'Show'} Comments
          </button>
        </div>

        {showComments && (
          <>
            <form onSubmit={handleAddComment} className="add-comment-form">
              <img src="/cz photo.jpg" alt="Your Avatar" className="comment-avatar" />
              <div className="comment-input-container">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="comment-input"
                />
                <button type="submit" className="comment-submit-btn">Comment</button>
              </div>
            </form>

            <div className="comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-time">{comment.time}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                    <div className="comment-actions">
                      <button 
                        className="like-comment-btn"
                        onClick={() => handleLikeComment(comment.id)}
                      >
                        👍 {comment.likes}
                      </button>
                      <button className="reply-btn">Reply</button>
                    </div>
                    
                    {comment.replies && comment.replies.map((reply) => (
                      <div key={reply.id} className="comment-reply">
                        <img src={reply.avatar} alt={reply.author} className="reply-avatar" />
                        <div className="reply-content">
                          <div className="reply-header">
                            <span className="reply-author">{reply.author}</span>
                            <span className="reply-time">{reply.time}</span>
                          </div>
                          <p className="reply-text">{reply.text}</p>
                          <div className="reply-actions">
                            <button className="like-reply-btn">👍 {reply.likes}</button>
                            <button className="reply-to-reply-btn">Reply</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer
