import React from 'react'

const VideoDetail = ({ video }) => {
      if(!video) {
        return(
            <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Checking for videos...</div>
                </div>
            </div>
        ) 
      } else {
      return(
        <div>
        {video.snippet.title}
        </div>
      )
    }
}

export default VideoDetail
