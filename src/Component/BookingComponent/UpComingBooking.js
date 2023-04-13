import { useEffect, useState } from "react";
import baseurl from "../../ApiFile";
const UpComingBooking = () => {
    const userId="AU1236";
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
    const[upcomingBooking,setupcomingBooking]=useState(null);
    // console.log(JSON.parse(localStorage.getItem('token')))
    const token="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBVTEyMzYscmFuamFuLmFtYW41NDBAZ21haWwuY29tIiwiaXNzIjoiTWF0cml4Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2ODEzMzIxMTEsImV4cCI6MTY4MTQxODUxMX0.1AGdbm-t0CRq4GoLwI3mfWTJPdptik8Di6IoR2A3rQPgCfC---2P53NWVUiOueEtG1dPU7gsI6FPQZicdbHKZQ"
    const myHeaders = new Headers();
myHeaders.append('Authorization', token);
    useEffect(()=>{
        fetch(`http://localhost:8081/api/booking/user/?user=AU1236`,{
            headers: {
                "Content-type":"application/json",
                "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBVTEyMzYscmFuamFuLmFtYW41NDBAZ21haWwuY29tIiwiaXNzIjoiTWF0cml4Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2ODEzMzIxMTEsImV4cCI6MTY4MTQxODUxMX0.1AGdbm-t0CRq4GoLwI3mfWTJPdptik8Di6IoR2A3rQPgCfC---2P53NWVUiOueEtG1dPU7gsI6FPQZicdbHKZQ"

            }})
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
            
        })
        
    },[])
    console.log(upcomingBooking)
    return (<>
   <div className="upcoming-booking">
    <h3>Up-Coming Booking</h3>
    {!isPending&&<div>Loading.....</div>}
    {error&& <div>{error}</div>}
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