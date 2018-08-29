import React from 'react'
//
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer from '../.././Components/VerticalSpacer/VerticalSpacer'


import './RegularMode.css';

export default class RegularMode extends React.Component {
  render() {
    return (

          <div>
            <MathJumbo />
            <VerticalSpacer />
            <MathForm />
          </div>

  )}
}
