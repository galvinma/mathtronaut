import React from 'react'
import lifecycle from 'react-pure-lifecycle';

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

// css
import './Landing.css';

const componentDidMount = () => {
  store.dispatch(getLocation({
    location: "LANDING",
  }))

};

const methods = {
  componentDidMount
};

const Landing = (props) => (
  <div></div>
)

export default lifecycle(methods)(Landing);
