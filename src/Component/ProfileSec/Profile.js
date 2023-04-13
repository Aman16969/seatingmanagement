import React, { useState, useEffect } from "react";
import "./Profile.css";
import baseurl from "../../ApiFile";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [Error, setError] = useState(null);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const userId = "AU123";
  useEffect(() => {
    fetch(`http://localhost:8081/api/user/AU123`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBVTEyMyxkZW5jeXBhdGVsNkBhY2NvbGl0ZWRpZ2l0YWwuY29tIiwiaXNzIjoiTWF0cml4Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2ODEzNjI5NTMsImV4cCI6MTY4MTQ0OTM1M30.WP4yYBZWTCSZAcg-ZpUxRY0boVFOGSyyMFGjHZhdBwFILbWROVxZJYonm3Iw1seNzDs9hT2m7PBdK2xPOlDjyg",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Response not received");
        }
        return res.json();
      })
      .then((data) => {
        setUserDetail(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  console.log(userDetail);

  return (
    <>
      {!isPending && (
        <div className="profile-container">
          <h2>Profile</h2>
          <form className="modal-content">
            <div className="row1">
              <div>
                <label for="accolite_id">
                  <b>Accolite Id</b>
                </label>
                <input
                  style={{
                    backgroundColor: " #e6e9ef",
                    color: "#5f5f5f",
                    border: "1px solid #ddd",
                  }}
                  type="text"
                  placeholder="Enter Accolite Id"
                  name="accolite_id"
                  id="accolite_id"
                  required
                  readOnly={true}
                  value={userDetail.id}
                />
              </div>
              <div>
                <label for="email">
                  <b>Email</b>
                </label>
                <input
                  style={{
                    backgroundColor: " #e6e9ef",
                    color: "#5f5f5f",
                    border: "1px solid #ddd",
                  }}
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                  readOnly={true}
                  value={userDetail.email}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label for="fname">
                  <b>First Name</b>
                </label>
                <input
                  style={{
                    backgroundColor: " #e6e9ef",
                    color: "#5f5f5f",
                    border: "1px solid #ddd",
                  }}
                  type="text"
                  placeholder="Enter First Name"
                  name="fname"
                  id="fname"
                  required
                  readOnly={true}
                  value={userDetail.firstName}
                />
              </div>
              <div>
                <label for="lname">
                  <b>Last Name</b>
                </label>
                <input
                  style={{
                    backgroundColor: " #e6e9ef",
                    color: "#5f5f5f",
                    border: "1px solid #ddd",
                  }}
                  type="text"
                  placeholder="Enter Last Name"
                  name="lname"
                  id="lname"
                  required
                  readOnly={true}
                  value={userDetail.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label for="phoneNumber">
                  <b>Phone Number</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  readOnly={!editMode}
                  value={userDetail.phoneNumber}
                />
              </div>
              <div>
                <label for="location">
                  <b>Location</b>
                </label>
                <div>
                  <select
                    className="dropp"
                    name="location"
                    id="location"
                    defaultValue="none"
                    disabled={!editMode}
                    value={userDetail.location}
                  >
                    <option value="none" disabled hidden>
                      Select a Location
                    </option>
                    <option value="Banglore">Banglore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
              </div>
            </div>
            <button style={{ width: "96%" }} onClick={handleEditProfile}>
              Edit Profile
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
