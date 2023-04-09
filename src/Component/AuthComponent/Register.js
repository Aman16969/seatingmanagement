import React from 'react'
import { Link } from "react-router-dom";

const Register=()=>{
    
   
    return(
        <>
        <div className="login-container">
        <h2>Register</h2>
       <form className="modal-content">
        <div className="row1">
            <div>
                <label for="Id"><b>Accolite Id</b></label>
                <input type="text" placeholder="Enter Accolite Id" name="accolite_id" id="accolite_id" required/>
            </div>
            <div>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required/>
            </div>
        </div>
        <div className="row">
            <div>
                <label for="fname"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="fname" id="fname" required/>
            </div>
            <div>
                <label for="lname"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lname" id="lname" required/>
            </div>
        </div>
        <div className="row">
            <div>
                <label for="PhoneNumber"><b>Phone Number</b></label>
                <input type="text" placeholder="Enter Phone Number" name="phoneNumber" id="phoneNumber" required/>
            </div>
            <div>
                <label for="lname"><b>Location</b></label>
                <div className="drop">
                <select className='select-loc' name="subject" id="subject">
                    <option value="" selected="selected">Banglore</option>
                    <option value="" selected="selected">Hydrabad</option>
                    <option value="" selected="selected">Chennai</option>
                </select>
                </div>
            </div>
        </div>
        <div className="row">
            <div>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
            </div>
            <div>
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
            </div>
        </div>
    
    

    <button style={{width:'96%'}}>Register</button>
    <label>
      <span className="register-link">Already have an account?
        <Link to="/login"> Sign In</Link>
      </span>
      </label>
  
 
</form>
</div>
        </>
    )
}
export default Register;