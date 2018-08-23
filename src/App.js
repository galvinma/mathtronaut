import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

// Components
import MathJumbo from './Components/MathJumbo/MathJumbo'
import MathForm from './Components/MathForm/MathForm'
import Background from './Components/Background/Background'
import FooterImage from './Components/FooterImage/FooterImage'
import Rocket from './Components/Rocket/Rocket'
import VerticalSpacer from './Components/VerticalSpacer/VerticalSpacer'
import MoonAnimation from './Components/MoonAnimation/MoonAnimation'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/Landing/Landing'
import ShootingStarAnimation from './Components/ShootingStarAnimation/ShootingStarAnimation'
import PracticeMenu from './Components/PracticeMenu/PracticeMenu'
// Stylesheets
import './App.css';

const Home = () => (
  <div>
    <Landing />
  </div>
)

const RegularMode = () => (
  <div>
    <MathJumbo />
    <VerticalSpacer />
    <MathForm />
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
        // Animations/Images
        <Background />
        <ShootingStarAnimation />
        <FooterImage />
        <MoonAnimation />

        // Content
        <NavBar />


        <Route path="/" exact component={Home}/>
        <Route path="/regular" exact component={RegularMode}/>
        <Route path="/challenge" exact component={ChallengeMode}/>
        <Route path="/leaderboard" exact component={Leaderboard}/>
        <Route path="/practice" exact component={Practice}/>
      </div>
    )
  }
}

export default App
