import React, { useState } from "react";
import "./Booking.css";
import Bms from "../../Static/bms.png";
import seating from "../../Static/seating.png";
import LocationSelect from "./LocationSelect";
import DateSelect from "./DateSelect";
import SelectSeat from "./SelectSeats";
import baseurl from "../../ApiFile";
import { useNavigate } from "react-router-dom";
const BookingSeat = () => {
  const userId = "AU1271";
  const [locationId, setLocationId] = useState(null);
  const [date, setDate] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [availableSeat, setavailableSeat] = useState(null);
  const [isPendingSeat, setIsPendingSeat] = useState(true);
  const [errorSeat, setErrorSeat] = useState(null);
  const [isPendingBooking, setIsPendingBooking] = useState(true);

  const navigate = useNavigate();
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
        user_id: "AU1271",
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
        navigate("/");
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
      <div className="Booking-container" >
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
            <button style={{ width: "90%", padding: "4px" }}>Get Seats</button>
          </form>
          <form className="modal-content" onSubmit={handleBooking}>
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
          </form>
        </div>
        <div className="content">
            <div className="seats-container">
            <div className="Seat">
            <label>
              <input type="radio" name="seat" />
              <div className="seatName">A00</div>
            </label>
          </div>
          <div className="Seat">
            <label>
              <input type="radio" name="seat" />
              <div className="seatName">A00</div>
            </label>
          </div>
          <div className="Seat">
            <label>
              <input type="radio" name="seat" />
              <div className="seatName">A00</div>
            </label>
          </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default BookingSeat;
