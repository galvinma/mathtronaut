import React from 'react'
import {
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
import './PracticeMenu.css';

export default class PracticeMenu extends React.Component {
  render() {
    return (
      <div>
        <div className="buttonwrapper">
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">One</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Two</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Three</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Four</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Five</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Six</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Seven</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Eight</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Nine</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Ten</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Eleven</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button">Twelve</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
