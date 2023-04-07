
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Navbar from './Component/NavComponent/Navbar';
import Login from './Component/AuthComponent/Login';
import Register from './Component/AuthComponent/Register';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Navbar/>
      <Login/>
{/* <Register/> */}

      <BrowserRouter>
      <Navbar/>
      <br></br>
      <Routes>
          <Route exact path="/" element= {<Login/>}/>
          <Route path="/Register" element= {<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
