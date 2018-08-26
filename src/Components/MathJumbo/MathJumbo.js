import React from 'react'
import axios from 'axios';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';
import './MathJumbo.css';

export default class MathJumbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelogic: [],
  };
}
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/api/v1/regularmode', {
      params: {
        num: 2
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .then(res => {
      const gamelogic = res.data;
      this.setState({ gamelogic });
  })
}
  render() {
    return (
      <ul>
        { this.state.gamelogic.map(logic => <li>{logic.gamelogic.name}</li>)}
      </ul>
  )}
}
