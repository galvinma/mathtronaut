import React from 'react'
import lifecycle from 'react-pure-lifecycle';

// Components
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer from '../.././Components/VerticalSpacer/VerticalSpacer'
import MathNotification from '../.././Components/MathNotification/MathNotification'

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
    <MathJumbo />
    <VerticalSpacer />
    <MathForm />
    <MathNotification />
  </div>
);

export default lifecycle(methods)(RegularMode);
