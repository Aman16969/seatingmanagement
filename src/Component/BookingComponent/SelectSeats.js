const SelectSeat = (props) => {
  return (
    <div>
      <label htmlFor="seat">
        <b>Select Seat</b>
      </label>
      <div className="drop">
        <select
          className="select-seat"
          name="seat"
          id="seat"
          defaultValue="none"
          value={props.selectedSeat}
          onChange={(e) => props.setSelectedSeat(e.target.value)}
        >
          {props.isPendingSeat && <div>Loading seats...</div>}
          {props.errorSeat && <div>{props.errorSeat}</div>}
          <option value="none" selected disabled hidden>
            Select a Seat
          </option>
          {props.availableSeat &&
            props.availableSeat.map((seat) => (
              <option
                key={seat.id}
                value={seat.id}
                selected={seat.id === props.selectedSeat}
              >
                {seat.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SelectSeat;
