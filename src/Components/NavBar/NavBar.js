import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './NavBar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar staticTop collapseOnSelect>
        <Navbar.Header>
          <Nav>
            <NavItem exact={true} componentClass={NavLink} activeClassName='active' className="mathronaut_brand" href="/" to="/">MATHTRONAUT</NavItem>
          </Nav>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem componentClass={NavLink} activeClassName='active' className="styled_nav_link" href="/regularmode" to="/regularmode">PLAY</NavItem>
              <NavItem componentClass={NavLink} activeClassName='active' className="styled_nav_link" id="practicemenu_link" href="/practicemenu" to="/practicemenu">PRACTICE</NavItem>
              <NavItem componentClass={NavLink} activeClassName='active' className="styled_nav_link" href="/leaderboard" to="/leaderboard">LEADERBOARD</NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
