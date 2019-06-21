import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import SmurfCard from "./SmurfCard";

class SmurfList extends Component {
  componentDidMount() {
    console.log("Smurfs being staged for Smurf Prison Bus transportation");
    this.props.getSmurfs();
  }

  render() {
    console.log("SmurfList this.props.smurfs", this.props.smurfs);
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return <SmurfCard smurf={smurf} key={smurf.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("SmurfList mapStateToProps state", state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
