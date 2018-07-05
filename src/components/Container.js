import React from 'react';
import Square from './Square';
import Picker from './Picker';
import './Container.css';

class Container extends React.Component {
  state = {
    color: "FFFFFF"
  };
  updateColor = (event) => {
    this.setState({
      color: event.target.value
    })
  };
  render() {
    return (
      <div className="container">
        <Square color={this.state.color.slice(0,6)} />
        <Picker color={this.state.color} updateColor={this.updateColor}/>
      </div>
    )
  }
};

export default Container;