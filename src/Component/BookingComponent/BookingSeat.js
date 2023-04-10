import React from 'react';
import './Booking.css';
import Bms from '../../Static/bms.png'
import seating from '../../Static/seating.png'

const BookingSeat=()=>{
    return(
        <>
        <div className="Booking-container" style={{display: 'flex'}}>
            <div className="content">
                <img  src={Bms}  alt="BMS" style={{ width: '60%', height: 'auto'}} />
                <form className="modal-content">
                    <div>
                        <label htmlFor="location"><b>Location</b></label>
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
                        <label htmlFor="date"><b>Date</b></label>
                        <div className="drop">
                            <input  className="date" type="date" id="date"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="seat"><b>Select Seat</b></label>
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
                <div className='Seating-container'>
                    <img  src={seating}  alt="Seating Arrangement"   />
                </div>
        </div>
        </>
    )
}

export default BookingSeat;
