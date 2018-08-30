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
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
              <Jumbotron>
                <div id="math_jumbo" className="math_jumbo">
                  { this.props.left.left } x { this.props.mid.mid } { this.props.right.right }
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
