import React, { Fragment } from "react";
import BusRoutes from "./BusRoutes";
class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        busRoute: ""
      };
  
      this.handleBusRouteChange = this.handleBusRouteChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleBusRouteChange(event) {
      this.setState({ busRoute: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log("current state", this.state);
    }
  
    render() {
      return (
        <Fragment>
          <form onSubmit={this.handleSubmit}>
            <label>
              Stop name:
              <input
                value={this.state.busRoute}
                onChange={this.handleBusRouteChange}
              />
            </label>
            <input type="submit" value="Search Route" />
          </form>
          <hr></hr>
          <BusRoutes routeQuery={this.state.busRoute}></BusRoutes>
        </Fragment>
      );
    }
  }

export default SearchForm;