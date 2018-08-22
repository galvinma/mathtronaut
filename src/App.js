import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
// Components
import MathJumbo from './Components/MathJumbo/MathJumbo'
import MathForm from './Components/MathForm/MathForm'
import Background from './Components/Background/Background'
import FooterImage from './Components/FooterImage/FooterImage'
import Rocket from './Components/Rocket/Rocket'
import VerticalSpacer from './Components/VerticalSpacer/VerticalSpacer'
// Stylesheets
import './App.css';

const Home = () => (
  <div>
    <Link to="/">
      <button type="button">
        Home
      </button>
    </Link>
    <Link to="/regular">
      <button type="button">
        Regular Mode
      </button>
    </Link>
    <Link to="/challenge">
      <button type="button">
        Challenge Mode
      </button>
    </Link>
    <Link to="/leaderboard">
      <button type="button">
        Leaderboard
      </button>
    </Link>
  </div>
)

const RegularMode = () => (
  <div>
    <Rocket />
    <VerticalSpacer />
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

        <Route path="/" exact component={Home}/>
        <Route path="/regular" component={RegularMode}/>
        <Route path="/challenge" component={ChallengeMode}/>
        <Route path="/leaderboard" component={Leaderboard}/>
      </div>
    )
  }
}

export default App
