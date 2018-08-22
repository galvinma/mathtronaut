import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
import './Landing.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="buttonwrapper">
          <ButtonToolbar>
            <div className="btngroup">
              <Link to="/regular">
                <Button className="landingbutton" bsSize="large" type="button">
                  Regular Mode
                </Button>
              </Link>
              <Link to="/challenge">
                <Button className="landingbutton" bsSize="large" type="button">
                  Challenge Mode
                </Button>
              </Link>
              <Link to="/practice">
                <Button className="landingbutton" bsSize="large" type="button">
                  Practice
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button className="landingbutton" bsSize="large" type="button">
                  Leaderboard
                </Button>
              </Link>
            </div>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
