import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import BusRoute from "./BusRoute"

//GET_STOP -> GET_ROUTES
//Malminasema: lat: 60.2517007, Lon: 24.9985146 ID:HSL:1381101
//Eficode: lat: 60.1693803, lon: 24.9236575 ID:HSL:1130139
const GET_ROUTES = gql`
{
  plan(fromPlace: "HSL:1381101", toPlace: "HSL:1130139") {
    itineraries {
      legs {
        route {
          shortName
        }
        to {
          name
          arrivalTime
        }
        from {
          name
          departureTime
        }
        startTime
        endTime
      }
    }
  }
}
`;
//BusStops -> BusRoutes
const BusRoutes = (props) => (
  <Query query={GET_ROUTES}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>
          <h2>TIMETABLES</h2>
          {props.routeQuery}
          <table>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
            {data && data.plan && data.plan.itineraries.map(itinerary => <BusRoute data={itinerary} />)}
            </tbody>
          </table>
        </div>
      );
    }}
  </Query>
);

export default BusRoutes;