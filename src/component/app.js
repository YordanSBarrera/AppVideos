import React from 'react'
import SearchBar from './SearchBar'
import Youtube from '../API/youtube'

import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component {

    state = ({
        videos: [],
        selectVideo: null
    })

    onSelectVideo = (video) => {
        console.log('De la App :', video);
        this.setState({ selectVideo: video })
    }
    capturaBusqueda = async busq => {
        console.log(busq)
        const respVideos = await Youtube.get('/search', {
            params: {
                q: busq
            }
        });

        this.setState({ videos: respVideos.data.items })
        console.log(this.state.videos)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar llamadaApp={this.capturaBusqueda} />
                <div className="ui grid">
                    <div className="ui eleven wide column">
                        <VideoDetail video={this.state.selectVideo} />
                    </div>
                    <div className="ui five wide column">
                        <div className="ui container">
                            <VideoList videos={this.state.videos} onVideoSELECT={this.onSelectVideo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;