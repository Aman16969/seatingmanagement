
const DateSelect = (props) => {
  
  return (
    <>
      <div className="drop">
        <input
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
          className="date"
          type="date"
          id="date"
        />
      </div>
    </>
  );
};

export default DateSelect;
