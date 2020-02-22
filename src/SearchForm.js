import React, { Fragment } from "react";
import BusRoutes from "./BusRoutes";
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busRoute: ""
    };
  }


  render() {
    return (
      <Fragment>
        <BusRoutes routeQuery={this.state.busRoute}></BusRoutes>
      </Fragment>
    );
  }
}

export default SearchForm;