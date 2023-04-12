import React, { useState } from "react";
import "./Booking.css";
import SeatMapping from "./SeatMapping";
import LocationSelect from "./LocationSelect";
import DateSelect from "./DateSelect";
import SelectSeat from "./SelectSeats";
import baseurl from "../../ApiFile";
import UpComingBooking from "./UpComingBooking";
const BookingSeat = () => {
  const userId = "AU12731";
  const [locationId, setLocationId] = useState(null);
  const [date, setDate] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [availableSeat, setavailableSeat] = useState(null);
  const [isPendingSeat, setIsPendingSeat] = useState(true);
  const [errorSeat, setErrorSeat] = useState(null);
  const [isPendingBooking, setIsPendingBooking] = useState(true);
  const [message,setMessage]=useState(null);


  const handleBooking = (e) => {
    e.preventDefault();
    if (
      locationId !== null &&
      date !== null &&
      selectedSeat !== null &&
      userId !== null
    ) {
      const bookingDetail = {
        location_id: locationId,
        user_id: "AU12731",
        seat_id: selectedSeat,
        date: date,
      };
      console.log(bookingDetail);
      fetch(baseurl + "booking/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(bookingDetail),
      }).then(() => {
        setIsPendingBooking(false);
        setMessage("You Have Booked A seat: "+selectedSeat+" on "+date+".")
        setTimeout(()=>{
          window.location.reload();
        },2000)
      });
    }
  };
  const handleFetchSeatsRequest = (e) => {
    e.preventDefault();
    fetch(
      baseurl +
        "booking/availabe/locationAndDate?location=" +
        locationId +
        "&date=" +
        date
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could,not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setavailableSeat(data);
        setIsPendingSeat(false);
        setErrorSeat(null);
      })
      .catch((err) => {
        setErrorSeat(err.message);
        setIsPendingSeat(false);
      });
    console.log(availableSeat);
  };
 
  return (
    <>
      <div className="Booking-container">
        <div className="content">
          {/* <img src={Bms} alt="BMS" style={{ width: "60%", height: "auto" }} /> */}
          <form className="modal-content" onSubmit={handleFetchSeatsRequest}>
            <div>
              <label htmlFor="location">
                <b>Location</b>
              </label>
              <LocationSelect
                locationId={locationId}
                setLocationId={setLocationId}
              />
            </div>

            <div>
              <label htmlFor="date">
                <b>Date</b>
              </label>
              <DateSelect date={date} setDate={setDate} />
            </div>
            <button >Get Seats</button>
          </form>
          {
            locationId && date && selectedSeat &&
            <form className="modal-content" onSubmit={handleBooking}>
            {isPendingBooking && <button>Book Seat</button>}
            {!isPendingBooking && <button>Booking Seat</button>}
          </form>
          }
          <form className="modal-content">
            <UpComingBooking/>
          </form>
          
          {/* <form className="modal-content" onSubmit={handleBooking}>
            <SelectSeat
              availableSeat={availableSeat}
              selectedSeat={selectedSeat}
              setSelectedSeat={setSelectedSeat}
              isPendingSeat={isPendingSeat}
              errorSeat={errorSeat}
            />
            {isPendingBooking && (
              <button style={{ width: "90%", padding: "4px" }}>
                Book Seat
              </button>
            )}
            {!isPendingBooking && (
              <button style={{ width: "90%", padding: "4px" }}>
                Seat Booked
              </button>
            )}
          </form> */}
        </div>
        <div className="content">
          {message&& <span style={{color:'red'}}>{message}</span>}
          <SeatMapping 
          availableSeat={availableSeat}
              selectedSeat={selectedSeat}
              setSelectedSeat={setSelectedSeat}
              isPendingSeat={isPendingSeat}
              errorSeat={errorSeat}/>
        </div>
      </div>
    </>
  );
};

export default BookingSeat;
