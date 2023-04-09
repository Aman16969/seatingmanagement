import Edit from '../../Static/edit.png';
import Delete from '../../Static/delete.png';
const LocationList = () => {
  return ( <>
    <h2>Create Location</h2>
    <div className="location-list">
     <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Seating capacity</th>
          <th className='action'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Banglore</td>
          <td>100</td>
          <td style={{display:'flex',justifyContent:'space-between'}}><img src={Delete} alt="" /> <img src={Edit} alt="" /></td>
        </tr>
        <tr>
          <td>Banglore</td>
          <td>100</td>
          <td style={{display:'flex',justifyContent:'space-between'}}><img src={Delete} alt="" /> <img src={Edit} alt="" /></td>
        </tr>
        <tr>
          <td>Banglore</td>
          <td>100</td>
          <td style={{display:'flex',justifyContent:'space-between'}}><img src={Delete} alt="" /> <img src={Edit} alt="" /></td>
        </tr>
        <tr>
          <td>Banglore</td>
          <td>100</td>
          <td style={{display:'flex',justifyContent:'space-between'}}><img src={Delete} alt="" /> <img src={Edit} alt="" /></td>
        </tr>
      </tbody>
     </table>
    </div>
    </>
   );
}
 
export default LocationList;