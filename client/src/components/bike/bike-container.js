import React from "react";

import Bike from "./bike-view";

class ListContainer extends React.Component {
  render() {
    return <Bike bike={this.props.bike} />;
  }
}

export default ListContainer;
