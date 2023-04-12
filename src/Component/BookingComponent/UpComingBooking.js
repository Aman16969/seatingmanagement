import { useEffect, useState } from "react";
import baseurl from "../../ApiFile";
const UpComingBooking = () => {
    const userId="AU12731";
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
    const[upcomingBooking,setupcomingBooking]=useState(null);
    useEffect(()=>{
        fetch(baseurl+"booking/user/?user="+userId)
        .then((res)=>{
            if(!res.ok){
                throw Error("Response not recieved")
            }
            return res.json();
        })
        .then((data)=>{
            setupcomingBooking(data);
            isPending(false)
        }).catch((err)=>{
            setError(err.message);
            isPending(true)
        })
        
    },[])
    console.log(upcomingBooking)
    return (<>
   <div className="upcoming-booking">
    <h3>Up-Coming Booking</h3>
    {/* {isPending&&<div>Loading.....</div>}
    {error&& <div>{error}</div>} */}
    {
        upcomingBooking && upcomingBooking.map((booking)=>
        <div className="data-booking">
            <span style={{color:'red'}}>&#8226;</span>
            <span>{booking.date}</span>
            <span>{booking.location.name}</span>
        <span>Seat No: {booking.seat.name}</span>
        </div>
        )
    }
        
          
           
   </div>
    </> );
}
 
export default UpComingBooking;