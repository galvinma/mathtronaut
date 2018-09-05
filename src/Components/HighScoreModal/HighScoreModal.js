import React from 'react'
import { connect } from "react-redux";
import {
  Modal,
  Button,
} from 'react-bootstrap';

// redux
import store from '../.././Store/store'
import { getModalBool } from '../.././Actions/actions'

// css
import './HighScoreModal.css';

// functions
import { sendHighScore } from '../.././Utils/mode'

class HighScoreModal extends React.Component {
  componentDidMount() {
    var modal = document.getElementById('hsmodal');
    var closer = document.getElementsByClassName("close")[0];
    closer.onclick = function() {
        modal.style.display = "none";
        store.dispatch(getModalBool({
          modal_bool: false,
        }))
    }
  }

  render() {
    return (
      <div id="hsmodal">
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">MATHTRONAUT HIGH SCORE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input id="username_input" />
          </Modal.Body>
          <Modal.Footer>A score of {this.props.score.score} is legendary. Place your name among the stars.</Modal.Footer>
        </Modal.Dialog>
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
