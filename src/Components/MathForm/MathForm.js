import React from 'react'
import axios from 'axios';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import './MathForm.css';

const answers = [];
var counter = 0;

export default class MathForm extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.scoreGame = this.scoreGame.bind(this);
    }

    handleSubmit = (event) => {
      if(event.keyCode === 13){
        answers.push(parseInt(event.target.value));
        counter = counter + 1;
        console.log(answers)
        console.log(counter)
        if(counter === 10) {
          console.log("score here")
          {this.scoreGame()}
        };
        event.preventDefault();
        this.setState({
             placeholder: "",
         });
      }
    }

    scoreGame = (event) => {
      axios.get('http://127.0.0.1:5000/api/v1/score', {
        params: {
          answers: JSON.stringify(answers)
        }
      })
      .then(res => {
        const score = res.data;
        // this.setState({ score });
        console.log(score)
      })
    }

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
      );
    }
  }
