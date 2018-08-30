import React from 'react'
//
import MathJumbo from '../.././Components/MathJumbo/MathJumbo'
import MathForm from '../.././Components/MathForm/MathForm'
import VerticalSpacer from '../.././Components/VerticalSpacer/VerticalSpacer'


import './ChallengeMode.css';

export default class ChallengeMode extends React.Component {
  render() {
    return (

          <div>
            <MathJumbo />
            <VerticalSpacer />
            <MathForm />
          </div>

  )}
}
