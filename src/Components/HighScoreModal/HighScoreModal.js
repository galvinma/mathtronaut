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
  render() {
    return (
      <div id="hsmodal">
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">MATHTRONAUT HIGH SCORE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>To the moon! Please enter your name to place your score among the stars.</p>
          </Modal.Body>
          <Modal.Footer>
            <input id="username_input" />
            <Button bsStyle="primary" onClick={sendHighScore}>Submit</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}
