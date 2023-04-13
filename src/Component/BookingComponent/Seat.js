import React from "react";

const Seat = ({ label, value, onChange }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="Seat">
      <label>
        <input
          type="radio"
          name="seat"
          checked={value}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

const SeatGen = ({ seatNo }) => {
  const seats = [];

  for (let i = 0; i < seatNo; i++) {
    seats.push(<Seat key={i} label={`A0${i + 1}`} />);
  }

  return <div className="Seat">{seats}</div>;
};

export default SeatGen;

{
  /* <div className="Seat" >
            <label>
              <input
                type="radio"
                value={selectedSeat}
                onChange={() => setSelectedSeat(true)}
                name="seat"
              />
            </label>
            <label>
              <input
                type="radio"
                value={selectedSeat}
                onChange={() => setSelectedSeat(true)}
                name="seat"
              />
            </label>
            <label>
              <input
                type="radio"
                value={selectedSeat}
                onChange={() => setSelectedSeat(true)}
                name="seat"
              />
            </label>
            <label>
              <input
                type="radio"
                value={selectedSeat}
                onChange={() => setSelectedSeat(true)}
                name="seat"
              />
            </label>
          </div> */
}
