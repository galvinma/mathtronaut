import React from 'react'
import { connect } from "react-redux";
import ReactDOM from 'react-dom';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

// css
import './MathForm.css';

// redux
import store from '../../Store/store'

// functions
import { scoreQuestion } from "../../Utils/score"
import { updateDisplay } from "../../Utils/numbers"
import { incrementCount, resetCount } from "../../Utils/counter"
import { setLock } from "../../Utils/lock"
import { startTimer } from "../../Utils/timer"
import {  resetScore,
          resetQuestionCount,
          displayGameEntry,
          displayGameAnswer,
          displayMathJumbo,
          displayFinalScore,
          hideFinalScore,
          displayMathJumboText,
          hideMathJumboText } from "../../Utils/reset"
import {  endGame,
          resetGame,
          enterGame,
          playGame,
          handleSubmit, } from "../../Utils/mode"


class MathForm extends React.Component {

    render() {
      return (
        <div id="form">
          <Grid>
            <Row className="show-grid">
              <Col sm={4} smOffset={4}>
                <Jumbotron className="math_form">
                  <div>
                    <div id="game_entry">PRESS ENTER TO PLAY</div>
                    <input id="game_answer" className="answer"/>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          </Grid>
        </div>
      )}
  }

  export default MathForm
