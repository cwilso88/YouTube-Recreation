import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div 
        onClick={() => {onVideoSelect(video)}}
        className="item video-item" 
        key={video.id.videoId}
    >
        <img 
            className="ui rounded image" 
            alt={video.snippet.description} 
            src={video.snippet.thumbnails.medium.url} />
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
      
    </div>
  )
}

export default VideoItem;
