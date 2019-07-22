import React from "react";
import NewBikeMarker from "./new-bike-marker-view";
import { postNewStolenBike } from "../../api/bikes";

class NewBikeMarkerContainer extends React.Component {
  state = {
    newStolenBike: {
      title: "",
      description: "",
      stolenFrom: {
        place: "",
        location: {
          lat: this.props.position[0],
          lon: this.props.position[1]
        }
      }
    }
  };

  onSubmitNewStolenBike = () => {
    postNewStolenBike(this.state.newStolenBike);
    this.props.onNewBikeCreated(this.state.newStolenBike);
  };

  onPlaceChange = event => {
    const place = event.target.value;
    this.setState(prev => {
      return {
        newStolenBike: {
          ...prev.newStolenBike,
          stolenFrom: { ...prev.newStolenBike.stolenFrom, place }
        }
      };
    });
  };

  onTitleChange = event => {
    const title = event.target.value;
    this.setState(prev => {
      return {
        newStolenBike: {
          ...prev.newStolenBike,
          title
        }
      };
    });
  };

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(prev => {
      return {
        newStolenBike: {
          ...prev.newStolenBike,
          description
        }
      };
    });
  };

  render() {
    return (
      <NewBikeMarker
        position={this.props.position}
        title={this.state.newStolenBike.title}
        description={this.state.newStolenBike.description}
        place={this.state.newStolenBike.stolenFrom.place}
        onPlaceChange={this.onPlaceChange}
        onTitleChange={this.onTitleChange}
        onDescriptionChange={this.onDescriptionChange}
        onSubmit={this.onSubmitNewStolenBike}
      />
    );
  }
}

export default NewBikeMarkerContainer;
