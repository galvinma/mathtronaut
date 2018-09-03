import React from 'react'
import lifecycle from 'react-pure-lifecycle';

// css
import './Leaderboard.css';

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

const componentDidMount = () => {
  store.dispatch(getLocation({
    location: "LEADERBOARD",
  }))

};

const methods = {
  componentDidMount
};

const Leaderboard = (props) => (
  <div id="leaderboard"></div>
);

export default lifecycle(methods)(Leaderboard);
