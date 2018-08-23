import React from 'react'
import { Link } from 'react-router-dom';
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
            <div className="btngroup">
                <Button className="practicebutton" bsSize="large" type="button">One</Button>
                <Button className="practicebutton" bsSize="large" type="button">Two</Button>
                <Button className="practicebutton" bsSize="large" type="button">Three</Button>
                <Button className="practicebutton" bsSize="large" type="button">Four</Button>

            </div>
          </ButtonToolbar>
          <ButtonToolbar>
            <div className="btngroup">
                <Button className="practicebutton" bsSize="large" type="button">Five</Button>
                <Button className="practicebutton" bsSize="large" type="button">Six</Button>
                <Button className="practicebutton" bsSize="large" type="button">Seven</Button>
                <Button className="practicebutton" bsSize="large" type="button">Eight</Button>

            </div>
          </ButtonToolbar>
          <ButtonToolbar>
            <div className="btngroup">
                <Button className="practicebutton" bsSize="large" type="button">Nine</Button>
                <Button className="practicebutton" bsSize="large" type="button">Ten</Button>
                <Button className="practicebutton" bsSize="large" type="button">Eleven</Button>
                <Button className="practicebutton" bsSize="large" type="button">Twelve</Button>

            </div>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
