import React from "react";
import { fetchAllBikes } from "../../api/bikes";
import MapView from "./map-view";

class MapContainer extends React.Component {
  state = { bikes: [] };

  componentDidMount() {
    fetchAllBikes(bikes => {
      console.log(bikes);
      this.setState({ bikes });
    });
  }

  onMapClickHandler = event => {
    if (this.state.newBikeMarker) {
      this.setState({ newBikeMarker: null });
    } else {
      console.log(event);
      this.setState({
        newBikeMarker: {
          position: [event.latlng.lat, event.latlng.lng]
        }
      });
    }
  };

  onNewBikeCreated = newBike => {
    const newBikesList = [...this.state.bikes, newBike];
    this.setState({ bikes: newBikesList, newBikeMarker: null });
  };

  render() {
    return (
      <MapView
        bikes={this.state.bikes}
        onMapClickHandler={this.onMapClickHandler}
        newBikeMarker={this.state.newBikeMarker}
        onNewBikeCreated={this.onNewBikeCreated}
      />
    );
  }
}

export default MapContainer;
