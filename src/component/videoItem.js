import React from 'react'

const VideoItem = ({video, onVideoSelect}) => {
    
    return (
        <div className='item' onClick={()=>{onVideoSelect(video)}}>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt="123" height="50%"/>
            <div className='content'>
            <label>{video.snippet.title}</label>
                </div>        
            
        </div>
    )
}
export default VideoItem;