import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="item" key={video.id.videoId}>
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
