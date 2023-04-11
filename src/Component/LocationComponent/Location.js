import LocationList from "./LocationList";
import './Location.css'
import LocationCreate from "./LocationCreate";
const Location = () => {
    return ( <>
    
    <div className="location">
        <div>
        <LocationList/>
        </div>
        <div>
        <LocationCreate/>
        </div>
    </div>
        
       
        </>
     );
}
 
export default Location;