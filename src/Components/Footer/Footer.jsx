import React, { Component } from 'react'
import './Footer.css';

import About from '../About/About';

class Footer extends Component {

  render() {
    return (
      <div className="main-footer-div">
        <About />
        <div className="main-footer-content">
          This will be the footer.
        </div>
      </div>
    )
  }
}

export default Footer;
