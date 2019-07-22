import React from "react";
import { Marker, Popup } from "react-leaflet";

/*
 *
 * newStolenBike: {
 *    stolenFrom: {
 *      place: "",
 *      location: {
 *        lat: this.props.position[0],
 *       lon: this.props.position[1]
 *      },
 *      title: "",
 *      description: ""
 *    }
 *  }
 */
const NewBikeMarkerView = props => (
  <Marker position={props.position}>
    <Popup>
      <div>
        <span>
          <input
            id="new-bike-title-input"
            type="text"
            value={props.title}
            onChange={props.onTitleChange}
          />
          <label htmlFor="new-bike-title-input">Title</label>
        </span>
        <span>
          <input
            id="new-bike-title-description"
            type="text"
            value={props.description}
            onChange={props.onDescriptionChange}
          />
          <label htmlFor="new-bike-title-description">Description</label>
        </span>
        <span>
          <input
            id="new-bike-title-place"
            value={props.place}
            onChange={props.onPlaceChange}
          />
          <label htmlFor="new-bike-title-place">Place</label>
        </span>
        <br />
        <span>
          <button onClick={props.onSubmit}>Submit</button>
        </span>
      </div>
    </Popup>
  </Marker>
);

export default NewBikeMarkerView;
