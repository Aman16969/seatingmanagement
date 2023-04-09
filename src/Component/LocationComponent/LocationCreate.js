const LocationCreate = () => {
    return ( 
        <>
        <h2>Create Location</h2>
        <div className="location-create">
            <form>
                <label htmlFor="Location">Location</label>
                <input type="text" placeholder="Enter Location" required/>
                <label htmlFor="SeatingCapacity">Seating Capacity</label>
                <input type="number" placeholder="Enter Seat Capacity" required/>
                <label htmlFor="Address">Address</label>
                <textarea name="address" id="" cols="30" rows="3"></textarea>
                <button>Add Location</button>

            </form>
        </div>
        </>
     );
}
 
export default LocationCreate;