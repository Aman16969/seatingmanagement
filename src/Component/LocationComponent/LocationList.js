import Edit from '../../Static/edit.png';
import Delete from '../../Static/delete.png';
import useFetch from '../../userFetch';
import { useNavigate } from 'react-router-dom';

const LocationList = () => {
  
  const urlGet='http://localhost:8081/api/location/';
  const{data:location,isPending,error}=useFetch(urlGet);
  const navigate=useNavigate();
  
  const handleDelete=(id)=>{
    console.log(id)
      fetch("http://localhost:8081/api/location/"+id,{
        method:'DELETE'
      }).then(()=>
      navigate("/location"));
  }
  return ( <>
    <h2>All Location</h2>
    <div className="location-list">
     <table>
      {isPending && <div>loading</div>}
      {error && {error}}
      <thead>
        <tr>
          <th>Location</th>
          <th>Seating capacity</th>
          <th className='action'>Action</th>
        </tr>
      </thead>
      <tbody>
        {location && location.map((loc)=>(
          <tr key={loc.id}>
            <td>{loc.name}</td>
            <td>{loc.seatingCapacity}</td>
            <td style={{display:'flex',justifyContent:'space-between'}}><img src={Delete} alt="" onClick={()=>handleDelete(loc.id)}/> <img src={Edit} alt="" /></td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
    </>
   );
}
 
export default LocationList;