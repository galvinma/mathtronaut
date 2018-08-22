import React from 'react'
import './MoonAnimation.css';
import moonanimation from './moon.png'

export default class MoonAnimation extends React.Component {
  render() {
    return (
      <div className = "moon_animation">
        <img className="img-responsive" src={moonanimation} alt="footer"/>
      </div>
    );
  }
}
