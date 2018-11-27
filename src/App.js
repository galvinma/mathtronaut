import React, { Component } from 'react'
import { Route } from 'react-router-dom';

// Pages
import RegularMode from './Pages/RegularMode/RegularMode'
import PracticeMenu from './Pages/PracticeMenu/PracticeMenu'
import PracticeMode from './Pages/PracticeMode/PracticeMode'
import Landing from './Pages/Landing/Landing'
import About from './Pages/About/About'

// Components
import NavBar from './Components/NavBar/NavBar'

// Images and Animations
import ShootingStarAnimation from './Images/ShootingStarAnimation/ShootingStarAnimation'

// Functions
import { handleSubmit } from './Utils/mode'

// Stylesheets
import './App.css';

const _Landing = () => (
  <div>
    <Landing />
  </div>
)

const _RegularMode = () => (
  <div>
    <RegularMode />
  </div>
)

const _PracticeMenu = () => (
  <div>
    <PracticeMenu />
  </div>
)

const _PracticeMode = () => (
  <div>
    <PracticeMode />
  </div>
)

const _About = () => (
  <div>
    <About />
  </div>
)

class App extends Component {

  componentDidMount() {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
          handleSubmit()
      }
    });
  }

  render() {
    var landingback = require('./Images/Background/Rocket_Landing_Background.gif')
    var launchingback = require('./Images/Background/Rocket_Launch_Background.gif')
    return (
      <div>
        <img id="landing_static" alt="" style ={ { backgroundImage: "url("+landingback+")" } }/>
        <img id="landing_background" alt="" style ={ { backgroundImage: "url("+landingback+")" } }/>
        <img id="launching_background" alt="" style ={ { backgroundImage: "url("+launchingback+")" } }/>
          <ShootingStarAnimation />
          <NavBar />

          <Route path="/" exact component={_Landing}/>
          <Route path="/regularmode" exact component={_RegularMode} />
          <Route path="/practicemenu" component={_PracticeMenu}/>
          <Route path="/practicemode" component={_PracticeMode}/>
          <Route path="/about" component={_About}/>
      </div>
    )
  }
}

export default App
