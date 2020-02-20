import React, { Fragment } from "react";
import BusStops from "./BusStops";
class StopForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        busStop: ""
      };
  
      this.handleBusStopChange = this.handleBusStopChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleBusStopChange(event) {
      this.setState({ busStop: event.target.value });
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
                value={this.state.busStop}
                onChange={this.handleBusStopChange}
              />
            </label>
            <input type="submit" value="Search stop" />
          </form>
          <hr></hr>
          <BusStops stopQuery={this.state.busStop}></BusStops>
        </Fragment>
      );
    }
  }

export default StopForm;