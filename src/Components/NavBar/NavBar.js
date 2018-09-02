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
            <NavItem componentClass={Link} className="styled_nav_link" href="/regular" to="/regular">GAME MODE</NavItem>
            <NavItem componentClass={Link} className="styled_nav_link" href="/practice" to="/practice">PRACTICE MODE</NavItem>
            <NavItem componentClass={Link} className="styled_nav_link" href="/leaderboard" to="/leaderboard">LEADERBOARD</NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar.Header>
      </Navbar>

    );
  }
}
