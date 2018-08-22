import React, { Component } from 'react'
// Components
import NavBar from './Components/NavBar/NavBar'
import MathJumbo from './Components/MathJumbo/MathJumbo'
import Background from './Components/Background/Background'
import FooterImage from './Components/FooterImage/FooterImage'
import Rocket from './Components/Rocket/Rocket'
// Stylesheets
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <div className="bg"></div>
          <Background />
          <Rocket />
          <FooterImage />
      </div>
    )
  }
}

export default App
