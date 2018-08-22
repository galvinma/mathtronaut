import React from 'react'

import './FooterImage.css';
import moonfooter from './moon_footer.png'

export default class FooterImage extends React.Component {
  render() {
    return (
        <div className = "moon_footer">
          <img className="img-responsive" src={moonfooter} alt="footer"/>
        </div>
    );
  }
}
