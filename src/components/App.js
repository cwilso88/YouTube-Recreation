import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';

class App extends Component {
  state = {
    videos: []
  }
  onTermSubmit = async (term) => {
    const response= await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <br/>
        <h1>I have {this.state.videos.length} videos</h1>
      </div>
    )
  }
}

export default App;