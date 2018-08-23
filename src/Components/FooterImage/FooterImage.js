import React from 'react'
import './FooterImage.css';
import marsfooter from './MarsMountains.png'

export default class FooterImage extends React.Component {
  render() {
    return (
        <div className = "img_footer">
          <img className="img-responsive" src={marsfooter} alt="footer"/>
        </div>
    );
  }
}
