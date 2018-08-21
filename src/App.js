import React, { Component } from 'react'
// Components
import NavBar from './Components/NavBar/NavBar'
import MathJumbo from './Components/MathJumbo/MathJumbo'
import Background from './Components/Background/Background'
// Stylesheets
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <div className="bg"></div>
          <Background />
          <NavBar />
          <MathJumbo />
      </div>
    )
  }
}

export default App
