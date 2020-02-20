import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import BusStop from "./BusStop"

const GET_STOP = gql`
  query Stop($stop: String!) {
    stops(name: $stop) {
      gtfsId
      name
      code
      lat
      lon
    }
  }
`;

const BusStops = (props) => (
  <Query query={GET_STOP} variables={{stop: props.stopQuery}} skip={!props.stopQuery} pollInterval={5000}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>
          <h2>Valitse pysäkki</h2>
          Hakusana: {props.stopQuery}
          <table>
              <th>Stop name</th>
              <th>Stop number</th>
            {data && data.stops && data.stops.map(stop => <BusStop data={stop} />)}
          </table>
        </div>
      );
    }}
  </Query>
);

export default BusStops;