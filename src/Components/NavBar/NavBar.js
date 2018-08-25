import React from 'react'
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './NavBar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">MATHTRONAUT</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
            <NavItem >
              <Link className="styled_nav_link" to="/regular">NORMAL MODE</Link>
            </NavItem>
            <NavItem >
              <Link className="styled_nav_link" to="/challenge">CHALLENGE MODE</Link>
            </NavItem>
            <NavItem >
              <Link className="styled_nav_link" to="/practice">PRACTICE</Link>
            </NavItem>
            <NavItem >
              <Link className="styled_nav_link" to="/leaderboard">LEADERBOARD</Link>
            </NavItem>

          </Nav>
          </Navbar.Collapse>
        </Navbar.Header>
      </Navbar>


    );
  }
}
