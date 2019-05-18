import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
    <div>
        <form>
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search for videos..."></input>
                    <i className="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
