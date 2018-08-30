import React from 'react'
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';

// redux
import store from '../../Store/store'

// functions
import { updateDisplay } from "../../Utils/numbers"
import { startTimer } from "../../Utils/timer"
import { resetScore, resetQuestionCount } from "../../Utils/reset"

// css
import './MathJumbo.css';

class MathJumbo extends React.Component {

  onStart() {
    // Start the timer and upate time in the store
    resetScore();
    resetQuestionCount();
    startTimer();
    updateDisplay('REGULAR');
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
              <button onClick={this.onStart}>Press me to start the game!</button>
              <Jumbotron>
                <div className="math_jumbo">
                  <p>{ this.props.left.left } x { this.props.mid.mid } { this.props.right.right } </p>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    )}
}

const mapStateToProps = state => {
  return {
    left: state.left,
    mid: state.mid,
    right: state.right,
    time: state.time
  }
}

export default connect(mapStateToProps)(MathJumbo);
