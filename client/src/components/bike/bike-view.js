import React from "react";

const Bike = props => (
  <li>
    {console.log(props)}
    <h1>{props.bike.title}</h1>
    <p>{props.bike.description}</p>
  </li>
);

/*
  {
    "stolenFrom": {
      "location": {
        "lat": 64.992941,
        "lon": 25.517942
      },
      "place": "Kaukovainio"
    },
    "_id": "5d33a34b6528c14198bc7fba",
    "title": "test-title",
    "description": "test description",
    "submitted": "2019-07-20T23:27:07.681Z",
    "__v": 0
  }
*/
export default Bike;
