import React from 'react'
import { connect } from "react-redux";
import {
  Modal,
  Button,
  Grid,
  Col,
  Row,
} from 'react-bootstrap';

// redux
import store from '../.././Store/store'
import { getModalBool } from '../.././Actions/actions'

// css
import './HighScoreModal.css';

// functions
import { sendHighScore, hideModal } from '../.././Utils/mode'

class HighScoreModal extends React.Component {
  componentDidMount() {
    var modal = document.getElementById('hsmodal');
    var closer = document.getElementsByClassName("close")[0];
    closer.onclick = function() {
        hideModal();
    }

  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} smOffset={3}>
              <div id="hsmodal">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div id="modal_title">MATHTRONAUT HIGH SCORE</div>
                <input id="username_input" />
                <div id="hsmessage">A score of {this.props.score.score} is legendary. Place your name among the stars.</div>
                <div id="modal_error">Valid entries are less than 20 characters. Please try again.</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(HighScoreModal);
