import React, { Component } from 'react'
import { Route } from 'react-router-dom';


// Pages
import RegularMode from './Pages/RegularMode/RegularMode'
import PracticeMenu from './Pages/PracticeMenu/PracticeMenu'
import Landing from './Pages/Landing/Landing'

// Components
import VerticalSpacer from './Components/VerticalSpacer/VerticalSpacer'
import NavBar from './Components/NavBar/NavBar'

// Images and Animations
import Background from './Images/Background/Background'
import FooterImage from './Images/FooterImage/FooterImage'
import ShootingStarAnimation from './Images/ShootingStarAnimation/ShootingStarAnimation'
import MoonAnimation from './Images/MoonAnimation/MoonAnimation'

// Stylesheets
import './App.css';

const Home = () => (
  <div>
    <Landing />
  </div>
)

const Regular = () => (
  <div>
    <RegularMode />
  </div>
)

const ChallengeMode = () => (
  <div>
    This will be challenge mode...
  </div>
)

const Practice = () => (
  <div>
    <PracticeMenu />
  </div>

)

const Leaderboard = () => (
  <div>
    This will be the leaderboard...
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <ShootingStarAnimation />
        <FooterImage />
        <MoonAnimation />

        <NavBar />


        <Route path="/" exact component={Home}/>
        <Route path="/regular" exact component={Regular}/>
        <Route path="/challenge" exact component={ChallengeMode}/>
        <Route path="/leaderboard" exact component={Leaderboard}/>
        <Route path="/practice" exact component={Practice}/>
      </div>
    )
  }
}

export default App
