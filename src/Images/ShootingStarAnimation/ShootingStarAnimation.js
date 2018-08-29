import React from 'react'
import './ShootingStarAnimation.css';
import shootingstaranimation from './shootingstaranimation.gif'

export default class ShootingStarAnimation extends React.Component {
  render() {
    return (
      <div className = "shooting_star_animation">
        <img className="img-responsive" src={shootingstaranimation} alt="footer"/>
      </div>
    );
  }
}
