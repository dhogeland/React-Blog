import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Post from '../Post/Post';
import Title from '../Title/Title';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null,
    }
  }

getInitialSite() {
  axios.get('http://localhost:5000/api/getInitialSite')
    .then(response => {
      this.setState({picture:response.data[0].url})
    })
    .catch(err => {
      console.log('error', err)
      return err;
    });
}

componentWillMount() {
  this.getInitialSite();
}
  render() {
    return (
      <div>
        <Title picture={this.state.picture}/>
        <NavBar />
        <Post />
      </div>
    )
  }
}

export default App;
