import Edit from "../../Static/edit.png";
import Delete from "../../Static/delete.png";
import useFetch from "../../useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LocationList = () => {
  const [isOpenCon, setIsOpenCon] = useState(false);
  const [useEffectTrigger, setuseEffectTrigger] = useState(false);
  const [locationId, setLocationId] = useState(null);
  const urlGet = "http://localhost:8081/api/location/";
  const { data: location, isPending, error } = useFetch(urlGet);
  const navigate = useNavigate();
  const handleOpenPopUp = (e) => {
    setIsOpenCon(true);
    setLocationId(e);
  };

  const handleDelete = (id) => {
    fetch("http://localhost:8081/api/location/" + id, {
      method: "DELETE",
    }).then(() => {
      setIsOpenCon(false);
      window.location.reload();
    });
  };
  return (
    <>
      <h2>All Location</h2>
      <div className="location-list">
        <table>
          {isPending && <div>loading</div>}
          {error && { error }}
          <thead>
            <tr>
              <th>Location</th>
              <th>Seating capacity</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {location &&
              location.map((loc) => (
                <tr key={loc.id}>
                  <td>{loc.name}</td>
                  <td>{loc.seatingCapacity}</td>
                  <td
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img
                      src={Delete}
                      alt=""
                      onClick={() => handleOpenPopUp(loc.id)}
                    />{" "}
                    <img src={Edit} alt="" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {isOpenCon && (
          <div className="popupContainer">
            <div className="popup-boxd">
              <div className="popupHeader">
                <h2>Are you sure to delete this Location?</h2>
              </div>
              <div className="buttonsContainer">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={() => handleDelete(locationId)}
                >
                  Yes
                </button>
                <button
                  type="reset"
                  className="cancel-btn"
                  onClick={() => setIsOpenCon(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LocationList;
