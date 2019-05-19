import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import VideoList from './VideoList';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  onTermSubmit = async (term) => {
    const response= await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <br/>
        <br/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;