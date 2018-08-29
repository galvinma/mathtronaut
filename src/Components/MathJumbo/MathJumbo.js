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
import {getNumbers} from '../../Actions/index'

// functions
import { numberGenerator } from "../../Utils/axios"

// css
import './MathJumbo.css';

class MathJumbo extends React.Component {
  constructor(props) {
    super(props);
  }

  // updateNumbers() {
  //   // getNumbers('REGULAR');
  // }

  // displayNumbers = () => {
  //   this.props.dispatch({type: 'GET_NUMBERS'});
  // }

  onStart = () => {
    // Start timer
    // this.updateNumbers()
      store.dispatch(getNumbers({
        numbers: [3],
      }))

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
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return { numbers: state.numbers}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getNumbers: numbers => dispatch({type: 'GET_NUMBERS'})
//   }
// };

export default connect(mapStateToProps)(MathJumbo);
