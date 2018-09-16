import React from 'react'
import lifecycle from 'react-pure-lifecycle';

// Components
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer40 from '../.././Components/VerticalSpacer/VerticalSpacer40'

// Functions
import { resetGame } from '../.././Utils/mode'

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

// css
import './PracticeMode.css';

const componentDidMount = () => {
  resetGame();

  store.dispatch(getLocation({
    location: "PRACTICE",
  }))

  var pm = document.getElementById('practicemenu_link');
  pm.className += "active";

};

const componentWillUnmount = () => {
  var pm = document.getElementById('practicemenu_link');
  pm.className -= "active";
}

const methods = {
  componentDidMount,
  componentWillUnmount
};

const RegularMode = (props) => (
  <div id="practicemode">
    <VerticalSpacer40 />
    <MathJumbo />
    <VerticalSpacer40 />
    <MathForm />
  </div>
);

export default lifecycle(methods)(RegularMode);
