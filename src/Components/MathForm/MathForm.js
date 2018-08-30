import React from 'react'
import axios from 'axios';
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
import {getLeft, getMid, getRight} from '../../Actions/actions'


// functions
import { scoreQuestion } from "../../Utils/score"
import { updateDisplay } from "../../Utils/numbers"
import { startTimer } from "../../Utils/timer"
import {  resetScore,
          resetQuestionCount,
          displayGameEntry,
          displayGameAnswer,
          displayMathJumboText } from "../../Utils/reset"
import { updateQuestionCount } from "../../Utils/count"

export default class MathForm extends React.Component {
  constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
  };

  resetGame = (event) => {

  }

  startGame = (event) => {
    event.preventDefault();
    resetScore();
    resetQuestionCount();
    displayGameAnswer();
    updateQuestionCount();
    updateDisplay('REGULAR');
    displayMathJumboText()
    startTimer();
  }

  handleSubmit = (event) => {
    if (event.keyCode === 13){
        event.preventDefault();
        if (store.getState().count.count >= 1 && store.getState().count.count <= 10)
        {
            var integer = parseInt(event.target.value, 10);
            scoreQuestion(integer);
            updateQuestionCount();
            updateDisplay('REGULAR');
            startTimer();
            event.target.value = ""
        }
        else
        {
          this.resetGame()
          // Send numbers to the store
          store.dispatch(getLeft({
            left: store.getState().score.score,
          }))
          store.dispatch(getMid({
            mid: "",
          }))
          store.dispatch(getRight({
            right: "",
          }))

        }
      };
    };

    render() {
      return (
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
              <Jumbotron>
                <div className="math_form">
                  <input
                      id="game_entry"
                      className="answer"
                      placeholder="PRESS ENTER TO PLAY"
                      onKeyDown={this.startGame} />
                  <input
                      id="game_answer"
                      className="answer"
                      onKeyDown={this.handleSubmit} />
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      )}
  }
