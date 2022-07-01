import React, { useState } from 'react';

function PositionFilter(props) {
    const [selectedPosition, setPosition] = useState(props.position);
    const showPlayersAtPosition = (e) => {
        props.updatePosition(e.target.value)
        setPosition(e.target.value)
    }
    return(
        <form>
        <b> Select Position </b>
        <select value={selectedPosition} onChange ={showPlayersAtPosition} >
        <option> ALL </option>
        <option> RB </option>
        <option> WR </option>
        <option> QB </option>
        <option> TE </option>
        <option> DEF </option>
        <option> K </option>
        </select>
        </form>
    );  
}

export default PositionFilter;