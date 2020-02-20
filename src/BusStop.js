import React from "react";

const BusStop = (props) => (
    // {"gtfsId":"HSL:1363101","name":"Viikki","code":"3478","lat":60.229313,"lon":25.010037,"__typename":"Stop"}
    <tr>
        <td>{props.data.name}</td>
        <td>{props.data.code}</td>
    </tr>
)

export default BusStop;