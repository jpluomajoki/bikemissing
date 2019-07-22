import React from "react";
import fetch from "fetch";

import BikeList from "./bike-list-view";
import { fetchAllBikes } from "../../api/bikes";

class ListContainer extends React.Component {
  state = { bikes: [] };

  componentDidMount() {
    fetchAllBikes(bikes => {
      console.log(bikes);
      this.setState({ bikes });
    });
  }

  render() {
    return <BikeList bikes={this.state.bikes} />;
  }
}

export default ListContainer;
