import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import BusRoute from "./Itinerary"
import styled from "styled-components";

//Eficode: 60.1694107,24.9236173
const GET_ROUTES = gql`
{
  plan(from: {lat:60.251137, lon:25.014370}, to: {lat: 60.1694107, lon: 24.9236173}) {
    itineraries {
      startTime
      endTime
      legs {
        route {
          shortName
        }
        from {
          name
          departureTime
        }
        to {
          name
          arrivalTime
        }
        trip {
          tripHeadsign
        }
      }
    }
  }
}
`;

const Table = styled.table`
  width: 100%;
  grid-template-columns: 5rem auto 5rem;
`

const BusRoutes = () => (
  <Query query={GET_ROUTES}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>
          <h2>TIMETABLES</h2>
          <Table>
            <thead>
              <th>Leave home</th>
              <th>How to</th>
              <th>At office</th>
            </thead>
            <tbody>
              {data && data.plan && data.plan.itineraries.map(itinerary => <BusRoute data={itinerary} />)}
            </tbody>
          </Table>
        </div>
      );
    }}
  </Query>
);

export default BusRoutes;