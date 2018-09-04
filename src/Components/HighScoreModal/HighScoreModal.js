import React from 'react'
import {
  Modal,
  Button,
} from 'react-bootstrap';

// css
import './HighScoreModal.css';

// functions
import { sendHighScore } from '../.././Utils/mode'

export default class HighScoreModal extends React.Component {
  componentDidMount() {
    var modal = document.getElementById('hsmodal');
    var closer = document.getElementsByClassName("close")[0];
    closer.onclick = function() {
        modal.style.display = "none";
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
          <Modal.Footer>Enter a name to place your score among the stars</Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}
