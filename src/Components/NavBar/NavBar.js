import React from 'react'
import {
  Navbar,
} from 'react-bootstrap';
import './NavBar.css';
import logo from './Space_Math_Logo.png'

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
                <div className="logo img-responsive">
                  <a href="/"><img className="img-responsive" href="/" src={logo} alt="logo"/></a>
                </div>
        </Navbar.Header>
      </Navbar>
    );
  }
}
