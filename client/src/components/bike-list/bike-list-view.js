import React from "react";
import Bike from "../bike";

const BikeList = props => (
  <ul>
    {props.bikes.map(bike => (
      <Bike key={bike._id} bike={bike} />
    ))}
  </ul>
);

export default BikeList;
