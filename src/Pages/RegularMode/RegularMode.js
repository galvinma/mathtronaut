import React from 'react'
import lifecycle from 'react-pure-lifecycle';

// Components
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer from '../.././Components/VerticalSpacer/VerticalSpacer'
import MathNotification from '../.././Components/MathNotification/MathNotification'

// Functions
import { resetGame } from '../.././Utils/mode'

// css
import './RegularMode.css';

const componentDidMount = () => {
  console.log("Mounting and resetting the game...")
  resetGame();
};

const methods = {
  componentDidMount
};

const RegularMode = (props) => (
  <div id="rmode">
    <MathJumbo />
    <VerticalSpacer />
    <MathForm />
    <MathNotification />
  </div>
);

// export default RegularMode
export default lifecycle(methods)(RegularMode);
