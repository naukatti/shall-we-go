import React from "react";
import styled from "styled-components";

const Time = styled.td`
    font-weight: bold;
`
const Detail = styled.td`
    text-align: center;
`
const Leg = styled.td`
    padding: 0 0.5rem;
    float: left;
`

const Row = styled.tr`
    margin: 2rem 0;
`
const Transport = styled.td`
    background-color: #ffbaba;
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
    text-align: center;
    min-width: 2rem;
`
const Legs = styled.td`

`

const time = (unixMillis) =>
    new Date(unixMillis).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) // 24h format

const Itinerary = (props) => (
    <Row>
        <Time>{time(props.data.startTime)}</Time>
        <Legs>
            {props.data.legs.map(leg =>
                <Leg>
                    <Detail>{time(leg.from.departureTime)}</Detail>
                    <Detail>{leg.from.name}</Detail>
                    <Transport>{leg.route ? leg.route.shortName : "🏃"}</Transport>
                    <Detail>{leg.trip ? leg.trip.tripHeadsign : ""}</Detail>
                </Leg>
            )}
        </Legs>
        <Time>{time(props.data.endTime)}</Time>
    </Row>

)

export default Itinerary;