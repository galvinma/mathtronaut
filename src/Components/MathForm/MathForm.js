import React from 'react'
import axios from 'axios';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import './MathForm.css';

export default class MathForm extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendScores = this.sendScores.bind(this);
    }

    componentDidMount() {
      // this.startTimer()
  }

    handleSubmit = (event) => {
      if(event.keyCode === 13){
        this.LocaleContext.answers.push(parseInt(event.target.value));
        this.LocaleContext.counter = this.LocaleContext.counter + 1;
        console.log(this.LocaleContext.delta)
        console.log(this.LocaleContext.answers)
        console.log(this.LocaleContext.counter)
        if(this.LocaleContext.counter === 10) {
          console.log("score here")
          {this.sendScores()}
        };
        event.preventDefault();
        this.setState({
             placeholder: "",
         });
        this.LocaleContext.delta = 0;
        // this.startTimer();
      }
    }

    // startTimer = (event) => {
    //   var timeleft = new Date().getTime();
    //   var time = setInterval(function(){
    //     var now = new Date().getTime();
    //     this.LocaleContext.delta = now - timeleft;
    //     // console.log(delta)
    //     if (this.LocaleContext.delta > 10000) {
    //       clearInterval(time);
    //     }
    //   }, 10);
    //   return this.LocaleContext.delta
    // }


    sendScores = (event) => {
      axios.get('http://127.0.0.1:5000/api/v1/score', {
        params: {
          answers: JSON.stringify(this.LocaleContext.answers)
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
