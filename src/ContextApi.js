import { useState } from "react";

const Auth = () => {
     const[userEmail,setUserEmail]=useState(null)
     const[password,setPassword]=useState(null)
     const[token,setToken]=useState(null)
     const[data,setdata]=useState(null)
    return ( {userEmail,password,token,data} );
}
 
export default Auth;