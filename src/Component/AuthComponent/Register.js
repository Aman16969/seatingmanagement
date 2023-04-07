import React, { useState } from 'react';
import useFetch from '../../Utilities/useFetch';

const Register=()=>{

    const [accoliteId, setAccoliteId] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState(0);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [info, setInfo] = useState(null);

    const { data: locations, isPending, error } = useFetch('http://localhost:8081/api/location/');
    console.log(locations)
    const registerUser = (e) =>{
        e.preventDefault();
        if(password === repeatPassword){
            setInfo("Working...");
            const user = {id: accoliteId, email, firstName, lastName, phoneNumber, password, location};
            console.log(user);
            fetch('http://localhost:8081/api/user/', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user),   
            })
            .then(res => {
                if(!res.ok){
                    console.log(res);
                    setInfo("Registration failed!");
                    throw Error('Could not add the location');
                }
                else{
                    setInfo("Registration Successful");
                }
                return res.json();
            })
            .then(data => {
                setInfo("Registration Successful");
            })
            .catch(err => {
                setInfo(err.message);
            })
        }
        else{
            setInfo("Password Mismatch");
        }
    }

    return(
        <>
            { isPending && <div><p>Loading...</p></div>}
            { locations && <div className="container" style={{width:'60%' ,display: 'inline-flex',marginTop: '50px'}}>
                <form onSubmit={registerUser}>
                    <h1>Register</h1>
                    <hr></hr>
                    <div className="row1">
                        <div>
                            <label for="Id"><b>Accolite Id</b></label>
                            <input type="text" placeholder="Enter Accolite Id" name="accolite_id" id="accolite_id" required value={accoliteId} onChange={(e)=>setAccoliteId(e.target.value)}/>
                        </div>
                        <div>
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label for="fname"><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" name="fname" id="fname" required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <label for="lname"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="lname" id="lname" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label for="PhoneNumber"><b>Phone Number</b></label>
                            <input type="text" placeholder="Enter Phone Number" name="phoneNumber" id="phoneNumber" required value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                        </div>
                        <div>
                            <label for="lname"><b>Location</b></label>
                            <div className="drop">
                            <select className='select-loc' name="subject" id="subject" value={location} onChange={(e)=>setLocation(e.target.value)}>
                                {
                                    locations.map((location) => (
                                        <option value={location.id}>{location.name}</option>
                                    ))
                                }
                                
                                {/* <option value="Banglore" selected="selected">Banglore</option>
                                <option value="Hyderabad" selected="selected">Hyderabad</option>
                                <option value="Chennai" selected="selected">Chennai</option> */}
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" id="psw" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required value={repeatPassword} 
                                onChange={(e)=>{
                                        setRepeatPassword(e.target.value);
                                    }
                                    
                                }
                            />
                        </div>
                        { info && <div><p>{info}</p></div>}
                    </div>
                    <hr></hr>
                    <button type="submit" className="registerbtn">Register</button>
                    <div className="container signin">
                        <p>Already have an account? <a href="login.js" style={{color:'#ed7e1b'}}>Sign in</a>.</p>
                    </div>
                </form>
            </div>}
        </>
    )
}
export default Register;