import React from 'react'
import VideoItem from './videoItem'

const VideoLIST = ({ videos, onVideoSELECT }) => {
    const renderList = videos.map(
        (vid) => {
            return (<VideoItem 
            video={vid} 
            key={vid.id.videoId}
            onVideoSelect={onVideoSELECT}
            />)
        }
    );

    return (
        <div className='ui list'>
            {renderList}
        </div>
    )
};
export default VideoLIST;