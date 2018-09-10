import React from 'react'
import './ShootingStarAnimation.css';
import ShootingStarOne from './ShootingStarOne.gif'
import ShootingStarTwo from './ShootingStarTwo.gif'

export default class ShootingStarAnimation extends React.Component {
  render() {
    return (
        <div>
        <div className = "ShootingStarOne">
          <img className="img-responsive" src={ShootingStarOne} alt="footer"/>
        </div>
        <div className = "ShootingStarTwo">
          <img className="img-responsive" src={ShootingStarTwo} alt="footer"/>
        </div>
      </div>
    );
  }
}
