import baseurl from "../../ApiFile";
import React, { useEffect, useState } from "react";
const LocationSelect = (props) => {
    const [locationData, setLocationData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
  useEffect(() => {
    fetch(baseurl + "location/")
      .then((res) => {
        if (!res.ok) {
          throw Error("could,not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setLocationData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch error");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
  }, []);
  return (
    <>
      <div className="drop">
        <select
          value={props.locationId}
          onChange={(e) => props.setLocationId(e.target.value)}
          className="select-loc"
          name="subject"
          id="subject"
          defaultValue="none"
        >
          <option value="none" selected disabled hidden>
            Select a Location
          </option>
          {isPending && <div>Loading....</div>}\{error && <div>{error}</div>}
          {locationData &&
            locationData.map((loc) => (
              <option
                key={loc.id}
                value={loc.id}
              >
                {loc.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default LocationSelect;
