import React, { Component } from 'react'
import { Route } from 'react-router-dom';

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
import MoonAnimation from './Images/MoonAnimation/MoonAnimation'

// Stylesheets
import './App.css';

// redux
import { handleSubmit } from "./Utils/mode"

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
        <FooterImage />
        <MoonAnimation />

        <NavBar />

        <Route path="/" exact component={Home}/>
        <Route path="/regular" exact component={Regular} />
        <Route path="/leaderboard" exact component={Leader}/>
        <Route path="/practice" exact component={Practice}/>
      </div>
    )
  }
}

export default App
