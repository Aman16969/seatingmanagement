import React, { useState } from "react";
const SeatMapping = (props) => {

    const [seatName,setSeatName]=useState(null);
    const handleChange=(e)=>{
        setSeatName(e);
        // console.log(seatName)
    }
    return (  
        <div className="seat-container">
            <form >
  {props.isPending && <div>Loading seats..</div>}
  {props.errorSeat && <div>{props.errorSeat}</div>}
  {props.availableSeat &&
    props.availableSeat.map((seat) => (
      <label key={seat.id}>
        <input
          type="radio"
          name="seat"
          value={seat.id} 
          checked={seat.id === props.selectedSeat} 
          onChange={(e) => props.setSelectedSeat(e.target.value)} 
          onClick={()=>handleChange(seat.name)}
        />
        <span>{seat.name}</span>
      </label>
    ))}
    
</form>
{seatName&& <span>Selected Seat:{seatName}</span>}
          </div>
    );
}
 
export default SeatMapping;