import React from 'react'
import { Link } from 'react-router-dom';
import {
  Navbar,
} from 'react-bootstrap';
import './NavBar.css';
import logo from './Mathtronaut_Logo.png'

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <div className="logo img-responsive">
            <Link to="/">
              <img className="img-responsive" src={logo} alt="logo"/>
            </Link>
          </div>
        </Navbar.Header>
      </Navbar>
    );
  }
}
