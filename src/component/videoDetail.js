import React from 'react';
import './videoDetail.css';

const VideoDETAIL = ({ video }) => {
    if (!video) return <div>Aun nada...</div>


    const VideoDir = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="ui segment">
            <div>
                <iframe width="500" height="300" title="video de Youtube" src={VideoDir} />
            </div>
            <h4 className="ui header">Titulo: {video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDETAIL;