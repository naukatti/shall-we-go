import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Itinerary from "./Itinerary";
import styled from "styled-components";

// Home: lat:60.17786, lon:25.04901
// Eficode: lat:60.1694107, lon:24.9236173
const GET_ROUTES = gql`
  {
    plan(
      numItineraries: 5
      from: { lat: 60.17786, lon: 25.04901 }
      to: { lat: 60.1694107, lon: 24.9236173 }
    ) {
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
`;
const TimeHeader = styled.th`
  text-align: left;
`;
const HowToHeader = styled.th`
  text-align: center;
`;

const Routes = () => (
  <Query query={GET_ROUTES}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
        <div>
          <h2>
            <span role="img" aria-label="Bus emoji">
              🚌
            </span>
            TIMETABLES
            <span role="img" aria-label="Train emoji">
              🚆
            </span>
          </h2>
          <Table>
            <thead>
              <TimeHeader>Leave home</TimeHeader>
              <HowToHeader>How to</HowToHeader>
              <TimeHeader>At office</TimeHeader>
            </thead>
            <tbody>
              {data &&
                data.plan &&
                data.plan.itineraries.map((itinerary) => (
                  <Itinerary data={itinerary} />
                ))}
            </tbody>
          </Table>
        </div>
      );
    }}
  </Query>
);

export default Routes;
