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
// Stylesheets
import './App.css';

const Home = () => (
  <div>
    <Landing />
    <ShootingStarAnimation />
  </div>
)

const RegularMode = () => (
  <div>
    <Rocket />
    <MoonAnimation />
    <MathJumbo />
    <VerticalSpacer />
    <MathForm />
    <FooterImage />
  </div>
)

const ChallengeMode = () => (
  <div>
    This will be challenge mode...
  </div>
)

const Practice = () => (
  <div>
    This will be practice mode...
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
