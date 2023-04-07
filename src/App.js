
import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Navbar from './Component/NavComponent/Navbar';
import Login from './Component/AuthComponent/Login';
import Register from './Component/AuthComponent/Register';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
     
      {/* <Login/> */}
{/* <Register/> */}

      <BrowserRouter>
      <Routes>
          <Route exact path="/Login" element= {<Login/>}/>
          <Route path="/Register" element= {<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
