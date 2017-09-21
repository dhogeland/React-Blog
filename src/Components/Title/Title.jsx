import React, { Component } from 'react';


import './Title.css';

class Title extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="main-title-div">
        <img
          alt="Frankenstein's monster"
          className="main-title-image"
          src={this.props.picture}
        />
        <h1>This will be the title...</h1>
      </div>
    )
  }
}

export default Title;
