
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Navbar from './Component/NavComponent/Navbar';
import Login from './Component/AuthComponent/Login';
import Register from './Component/AuthComponent/Register';
import Location from './Component/LocationComponent/Location';
import Home from './Component/Home';
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <br></br>
      <div className='bg'>
      <Routes>
      <Route exact path="/" element= {<Home/>}/>
          <Route exact path="/Login" element= {<Login/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route path="/location" element= {<Location/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
