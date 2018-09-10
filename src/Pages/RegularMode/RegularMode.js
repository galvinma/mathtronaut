import React from 'react'
import lifecycle from 'react-pure-lifecycle';

// Components
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer40 from '../.././Components/VerticalSpacer/VerticalSpacer40'
import MathNotification from '../.././Components/MathNotification/MathNotification'
import HighScoreModal from '../.././Components/HighScoreModal/HighScoreModal'
import ProgressBar from '../.././Components/ProgressBar/ProgressBar'

// Functions
import { resetGame } from '../.././Utils/mode'

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

// css
import './RegularMode.css';

const componentDidMount = () => {
  resetGame();

  store.dispatch(getLocation({
    location: "REGULAR",
  }))

};

const methods = {
  componentDidMount
};

const RegularMode = (props) => (
  <div id="rmode">
    <VerticalSpacer40 />
    <MathJumbo />
    <VerticalSpacer40 />
    <MathForm />
    <MathNotification />
    <HighScoreModal />
  </div>
);

export default lifecycle(methods)(RegularMode);
