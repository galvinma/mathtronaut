import React from 'react'
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';

// Functions
import { handleSubmit } from '../.././Utils/mode'

// Components
import ProgressBar from '../ProgressBar/ProgressBar'

// css
import './MathJumbo.css';

class MathJumbo extends React.Component {
  componentDidMount() {
    var mjc = document.getElementById("math_form_container");
    mjc.addEventListener("click", function () {
        handleSubmit()
      })
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
              <div id="math_jumbo_container">
                <Jumbotron>
                  <div id="math_jumbo" className="math_jumbo">
                    { this.props.left.left } x { this.props.mid.mid }
                  </div>
                  <div id="final_score">
                    <div>SCORE</div>
                    <div>{ this.props.score.score }</div>
                  </div>
                  <ProgressBar />
                </Jumbotron>
              </div>
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
    time: state.time,
    score: state.score
  }
}

export default connect(mapStateToProps)(MathJumbo);
