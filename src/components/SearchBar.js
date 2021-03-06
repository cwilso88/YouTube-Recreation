import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

  render() {
    return (
    <div>
    <form 
        className="ui segment" 
        style={{top: '30px'}}
        onSubmit={this.onFormSubmit}
    >
    
            <div className="ui search" style={{position: 'relative', left: '30%'}}>
            <label style={{display: 'block', fontSize: '20px', paddingBottom: '10px'}}>Video Search</label>
                <div className="ui icon input">
                    
                    <input 
                        className="prompt" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        type="text" 
                        placeholder="Search for videos..."
                    ></input>
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
            </form>
      </div>
    )
  }
}

export default SearchBar;
