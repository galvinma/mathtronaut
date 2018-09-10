import React, { Component } from 'react'
import { Route } from 'react-router-dom';

// Pages
import RegularMode from './Pages/RegularMode/RegularMode'
import PracticeMenu from './Pages/PracticeMenu/PracticeMenu'
import PracticeMode from './Pages/PracticeMode/PracticeMode'
import Leaderboard from './Pages/Leaderboard/Leaderboard'
import Landing from './Pages/Landing/Landing'

// Components
import NavBar from './Components/NavBar/NavBar'

// Images and Animations
import Background from './Images/Background/Background'
import ShootingStarAnimation from './Images/ShootingStarAnimation/ShootingStarAnimation'
import MoonAnimation from './Images/MoonAnimation/MoonAnimation'


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

const _Leaderboard = () => (
  <div>
    <Leaderboard />
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
    return (
      <div>
        <Background />
        <ShootingStarAnimation />

        <NavBar />

        <Route path="/" exact component={_Landing}/>
        <Route path="/regularmode" exact component={_RegularMode} />
        <Route path="/leaderboard" exact component={_Leaderboard}/>
        <Route path="/practicemenu" component={_PracticeMenu}/>
        <Route path="/practicemode" component={_PracticeMode}/>
      </div>
    )
  }
}

export default App
