import React from "react";

const SmurfCard = props => {
  return (
    <div>
      <ul>
        <li>Name: {props.smurf.name}</li>
        <li>Age: {props.smurf.age}</li>
        <li>Height: {props.smurf.height}</li>
      </ul>
    </div>
  );
};

export default SmurfCard;
props;
