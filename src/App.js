import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/NavComponent/Navbar";
import Login from "./Component/AuthComponent/Login";
import Register from "./Component/AuthComponent/Register";
import Location from "./Component/LocationComponent/Location";
import Home from "./Component/Home";
import Profile from "./Component/ProfileSec/Profile";
import PrivateRoutes from "./PrivateRoutes";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <br></br>
          <div className="bg">
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/location" element={<Location />} />
                <Route path="/Profile" element={<Profile />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
