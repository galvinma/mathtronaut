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
      <Navbar staticTop inverse collapseOnSelect>
        <Navbar.Header>
          <Nav>
            <NavItem componentClass={Link} className="mathronaut_brand" href="/" to="/">MATHTRONAUT</NavItem>
          </Nav>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem componentClass={Link} className="styled_nav_link" href="/regularmode" to="/regularmode">GAME MODE</NavItem>
              <NavItem componentClass={Link} className="styled_nav_link" href="/practicemenu" to="/practicemenu">PRACTICE MODE</NavItem>
              <NavItem componentClass={Link} className="styled_nav_link" href="/leaderboard" to="/leaderboard">LEADERBOARD</NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
