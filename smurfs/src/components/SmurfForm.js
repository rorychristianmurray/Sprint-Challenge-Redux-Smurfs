import React, { Component } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  render() {
    return (
      <form onSubmit={this.addSmurf} className="smurf-form">
        <input
          type="text"
          placeholder="smurf name"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          placeholder="smurf age"
          name="age"
          value={this.state.age}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          placeholder="smurf height"
          name="height"
          value={this.state.height}
          onChange={this.handleChanges}
        />
        <button className="btn">Add Smurf</button>
      </form>
    );
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
  };
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
