import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom'

// Pages
import RegularMode from './Pages/RegularMode/RegularMode'
import PracticeMenu from './Pages/PracticeMenu/PracticeMenu'
import Leaderboard from './Pages/Leaderboard/Leaderboard'
import Landing from './Pages/Landing/Landing'

// Components
import NavBar from './Components/NavBar/NavBar'

// Images and Animations
import Background from './Images/Background/Background'
import FooterImage from './Images/FooterImage/FooterImage'
import ShootingStarAnimation from './Images/ShootingStarAnimation/ShootingStarAnimation'
import MoonAnimation from './Images/MoonAnimation/MoonAnimation'

// Stylesheets
import './App.css';

// redux
import store from './Store/store'
import {getGameState} from './Actions/actions'

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

const Practice = () => (
  <div>
    <PracticeMenu />
  </div>

)

const Leader = () => (
  <div>
    <Leaderboard />
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
        <Route path="/leaderboard" exact component={Leader}/>
        <Route path="/practice" exact component={Practice}/>
      </div>
    )
  }
}

export default App
