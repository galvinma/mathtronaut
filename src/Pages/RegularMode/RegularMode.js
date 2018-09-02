import React from 'react'
import ReactDOM from 'react-dom'
//
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer from '../.././Components/VerticalSpacer/VerticalSpacer'
import MathNotification from '../.././Components/MathNotification/MathNotification'

import { handleSubmit, } from "../../Utils/mode"

// redux
import store from '../.././Store/store'

// css
import './RegularMode.css';

export default class RegularMode extends React.Component {
  componentDidMount() {
      console.log("mounting!")

      window.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            handleSubmit()
        }
      });
    }

  componentWillUnmount() {
    console.log("unmounting")
    ReactDOM.unmountComponentAtNode(document.getElementById('rmode'));
  }
  
  render() {
    return (

          <div id="rmode">
            <MathJumbo />
            <VerticalSpacer />
            <MathForm />
            <MathNotification />
          </div>

  )}
}
