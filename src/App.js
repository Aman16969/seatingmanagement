
import './App.css';
import Navbar from './Component/NavComponent/Navbar';
import Login from './Component/AuthComponent/Login';
import Register from './Component/AuthComponent/Register';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br></br>
      {/* <Login/> */}
<Register/>


    </div>
  );
}

export default App;
