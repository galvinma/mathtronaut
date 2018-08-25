import React from 'react'
import axios from 'axios';
import './Landing.css';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelogic: [],
  };
}
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/api/v1/regularmode')
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
    )
  }
}
