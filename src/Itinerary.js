import React, { Fragment } from "react";
import styled from  "styled-components";

const Time = styled.span `
    font-weight: bold;
`

const time = (unixMillis) => new Date(unixMillis).toLocaleTimeString();

const BusRoute = (props) => (
    // {"gtfsId":"HSL:1363101","name":"Viikki","code":"3478","lat":60.229313,"lon":25.010037,"__typename":"Stop"}
    <Fragment>
    <tr>
    <td><Time>{time(props.data.startTime)}</Time></td>
    <td><Time>{time(props.data.endTime)}</Time></td>
    <td>
        <details>
        {props.data.legs.map(leg => 
        <Fragment>
            <td>Time: {time(leg.from.departureTime)}</td>
            <td>From: {leg.from.name}</td>
            <td>Vehicle: {leg.route ? leg.route.shortName : "Walk"}</td>
            <td>Towards: {leg.trip ? leg.trip.tripHeadsign : ""}</td>
        </Fragment>
        )}
        </details>
    </td>
    </tr>
    </Fragment>
    
)

export default BusRoute;