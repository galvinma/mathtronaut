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

// functions
import { scoreQuestion } from "../../Utils/score"
import { updateDisplay } from "../../Utils/numbers"
import { startTimer } from "../../Utils/timer"
import { resetScore, resetQuestionCount } from "../../Utils/reset"
import { updateQuestionCount } from "../../Utils/count"

export default class MathForm extends React.Component {
  constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (event) => {
    if (event.keyCode === 13){
        event.preventDefault();
        var integer = parseInt(event.target.value, 10);
        scoreQuestion(integer);
        // Upate question counter
        updateQuestionCount();
        if (store.getState().count.count <= 10) {
              // Reset timer
              startTimer();
              // Get new numbers from store
              updateDisplay('REGULAR');
              // Clear the input field
              event.target.value = ""
          }
          else
          {
            console.log("Game over. Final score is " + store.getState().score.score)
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
                      className="answer"
                      onKeyDown={this.handleSubmit} />
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      )}
  }
