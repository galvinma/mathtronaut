import React from 'react'

import './Rocket.css';
import rocket from './rocketred.png'

export default class Rocket extends React.Component {
  render() {
    return (
      <div className="rocket_container">
        <div className = "rocket">
          <img className="img-responsive" src={rocket} alt="rocket"/>
        </div>
      </div>
    );
  }
}
