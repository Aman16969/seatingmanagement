import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LocationCreate = () => {
    const navigate=useNavigate();
    const[name,setName]=useState(null);
    const[seatingCapacity,setSeatingCapacity]=useState(null);
    const [address,setAddress]=useState(null);
    const[isPending,setIsPending]=useState(false)
    
    const handleSubmit=(e)=>{
      
        e.preventDefault();
        const location={name,seatingCapacity,address};
        console.log(location);
        setIsPending(true);
        fetch("http://localhost:8081/api/location/",{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(location)
        }).then(()=>{
            setIsPending(false);
            navigate("/location")
        })

    }
    return ( 
        <>
        <h2>Add New Location</h2>
        <div className="location-container">
  <form className="modal-content" onSubmit={handleSubmit} >

      <label for="Location"><b>Location</b></label>
      <input type="text" placeholder="Enter Location Name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>

      <label for="seat"><b>Seat Capacity</b></label>
      <input type="number" placeholder="Enter Seating Capacity" name="seat" value={seatingCapacity} onChange={(e)=>{setSeatingCapacity(e.target.value)}} required/>

      <label for="address"><b>Address</b></label>
      <textarea name="address" id="" cols="30" rows="3" value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
              
               {!isPending && <button>Add Location</button>}
        
     
     

  </form>
  </div>
       
        </>
     );
}
 
export default LocationCreate;