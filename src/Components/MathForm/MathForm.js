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
import { scoreQuestion, resetScore } from "../../Utils/score"
import { updateDisplay } from "../../Utils/numbers"
import { startTimer } from "../../Utils/timer"

export default class MathForm extends React.Component {
  constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (event) => {
    if(event.keyCode === 13){
        event.preventDefault();
        // score the answer
        var value = event.target.value
        var integer = parseInt(value, 10);
        scoreQuestion(integer);
        // Reset timer
        startTimer();
        // Get new numbers from store
        updateDisplay('REGULAR');
        // Clear the input field
        event.target.value = ""
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
