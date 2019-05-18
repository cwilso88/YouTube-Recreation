import React, { Component } from 'react';
import SearchBar from "./SearchBar";

class App extends Component {
  onTermSubmit = (term) => {

  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
      </div>
    )
  }
}

export default App;