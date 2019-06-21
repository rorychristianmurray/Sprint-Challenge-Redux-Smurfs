import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

class SmurfCard extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.smurf.name}</li>
          <li>Age: {this.props.smurf.age}</li>
          <li>Height: {this.props.smurf.height}</li>
        </ul>
        <button onClick={this.deleteSmurf} className="delete-btn">
          X
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf }
)(SmurfCard);
