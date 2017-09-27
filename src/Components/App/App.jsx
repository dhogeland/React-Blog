import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import Links from '../Links/Links';
import Post from '../Post/Post';
import Footer from '../Footer/Footer';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null,
    }
  }

getInitialSite() {
  axios.get('/api/getInitialSite')
    .then(response => {
      console.log(response)
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
        <NavBar />
        <Title picture={this.state.picture}/>
        <Links />
        <Post />
        <Footer />
      </div>
    )
  }
}

export default App;
