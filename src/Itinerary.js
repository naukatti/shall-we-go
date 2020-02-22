import React, { Fragment } from "react";
import styled from "styled-components";

const Time = styled.td`
    font-weight: bold;
`
const Detail = styled.td`
    ;
`
const Leg = styled.td`
    padding: 0 2rem;
`

const Row = styled.tr`
    margin: 2rem 0;
`

const time = (unixMillis) =>
    new Date(unixMillis).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) // 24h format

const BusRoute = (props) => (
    <Row>
        <Time>{time(props.data.startTime)}</Time>
        <td>
            {props.data.legs.map(leg =>
                <Leg>
                    <Detail>{time(leg.from.departureTime)}</Detail>
                    <Detail>{leg.from.name}</Detail>
                    <Detail>{leg.route ? leg.route.shortName : "walk"}</Detail>
                    <Detail>{leg.trip ? leg.trip.tripHeadsign : ""}</Detail>
                </Leg>
            )}
        </td>
        <Time>{time(props.data.endTime)}</Time>
    </Row>

)

export default BusRoute;