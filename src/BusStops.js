import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
          <ul>
            {data && data.stops && data.stops.map(stop => <li>{JSON.stringify(stop)}</li>)}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default BusStops;