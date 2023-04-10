import React from 'react';
import './BookingSeat.css'
const BookingSeat=()=>{
    return(
        <>
        <div className = "Booking-container">
        <h2> Seat booking</h2>
        <form className="modal-content">
            <div>
                    <label for="location"><b>Location</b></label>
                    <div className="drop">
                    <select className='select-loc' name="subject" id="subject" defaultValue="none">
                    <option value="none" selected disabled hidden>Select a Location</option>
                        <option value="" selected="selected">Banglore</option>
                        <option value="" selected="selected">Hydrabad</option>
                        <option value="" selected="selected">Chennai</option>
                    </select>
                    </div>
            </div>
            <div >
                <label for="date"><b>Date</b></label>
                <div className="drop">
                    <input  className="date" type="date" id="date"/>
                </div>
            </div>
            <div>
                <label for= "seat"><b>Select Seat</b></label>
                <div className ="drop">
                <select className='select-seat' name='seat' id="seat" defaultValue="none">
                    <option value="none" selected disabled hidden>Select a Seat</option>
                    <option value="" selected="selected">1</option>
                    <option value="" selected="selected">2</option>
                    <option value="" selected="selected">3</option>
                </select>
                </div>
            </div>
            <button style={{width:'96%'}}>Select</button>
        </form>    
        </div>
        </>
    )
}
export default BookingSeat;
// C:\Users\dency.patel\React\login_register_page