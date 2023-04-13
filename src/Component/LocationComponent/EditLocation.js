import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import baseurl from "../../ApiFile";
const EditLocation = (props) => {
  const locationId = props.locationId;
  const {
    data: locationData,
    isPending,
    error,
  } = useFetch(baseurl + "location/" + locationId);
  const [name, setName] = useState(null); 
  const [seatingCapacity, setSeatingCapacity] = useState(null);
   const [address, setAddress] = useState(null);

    const [isP,setIsP] = useState(true);
    const [message, setMessage] = useState("");

  useEffect(() => {
    if (locationData) {
      setName(locationData.name || null);
      setSeatingCapacity(locationData.seatingCapacity || null);
      setAddress(locationData.address || null);
    }
  }, [locationData]);
 
  const handleEdit = (e) => {
    e.preventDefault();
    if(seatingCapacity>=locationData.seatingCapacity){
        const newlocation = { name,seatingCapacity,address };
        console.log(newlocation)
    setIsP(true);
    fetch(`${baseurl}location/${locationId}`, {
      method: 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newlocation),
    }).then(() => {
      setIsP(false);
      props.setIsOpenEdit(false)
      window.location.reload();
    });
    }
    else{
        setMessage("Cannot Decrease The Seat")
    }
    
  };

 
  return (
    <>
      {!isPending && (
        <div
          className="popupContainer"
          onClick={() => {
            props.setIsOpenEdit(true);
          }}
        >
          <div className="popup-boxd">
            <div className="popupHeader">
              <h2>Edit Loctaion</h2>
              {message && <span>{message}</span>}
            </div>
            <form
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <label for="Location">
                <b>Location</b>
              </label>
              <input
                type="text"
                placeholder="Enter Location Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />

              <label for="seat">
                <b>Seat Capacity</b>
              </label>
              <input
                type="number"
                placeholder="Enter Seating Capacity"
                name="seat"
                value={seatingCapacity}
                onChange={(e) => {
                  setSeatingCapacity(e.target.value);
                }}
                required
              />

              <label for="address">
                <b>Address</b>
              </label>
              <textarea
                name="address"
                id=""
                cols="30"
                rows="3"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></textarea>
              {!isPending && (
                <button onClick={handleEdit}>Edit Location</button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditLocation;
