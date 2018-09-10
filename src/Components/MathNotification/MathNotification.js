import React from 'react'
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

// css
import './MathNotification.css';

class MathNotification extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
                <div id="math_notif">
                  <div id="math_correct_notification">
                    <p>CORRECT!</p>
                  </div>
                  <div id="math_incorrect_notification">
                    <p>INCORRECT! {this.props.last_left.last_left} x {this.props.last_mid.last_mid} = { this.props.last_answer.last_answer }</p>
                  </div>
                </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )}
}

const mapStateToProps = state => {
  return {
    last_left: state.last_left,
    last_mid: state.last_mid,
    last_answer: state.last_answer,
  }
}

export default connect(mapStateToProps)(MathNotification);
