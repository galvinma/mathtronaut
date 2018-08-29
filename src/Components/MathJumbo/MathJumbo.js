import React from 'react'
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';

// redux
import store from '../../Store/index'
import {getNumbers, getTime} from '../../Actions/index'

// functions
import { numberGenerator } from "../../Utils/axios"
import { startTimer } from "../../Utils/timer"

// css
import './MathJumbo.css';

class MathJumbo extends React.Component {
  constructor(props) {
    super(props);
  }

  onStart() {
    startTimer();

    var nums = numberGenerator('REGULAR');
    nums.then(function (response) {
      store.dispatch(getNumbers({
        numbers: response,
      }))
    });
  }

  onAnswer() {
    // log answer for scoring

    // reset timer

    // Get new numbers from store
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
                  <p>{ this.props.numbers.numbers } </p>
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
    numbers: state.numbers,
    time: state.time
  }
}

export default connect(mapStateToProps)(MathJumbo);
