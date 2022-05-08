import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Authentication/Login/Login";
import Home from "./components/HomePage/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
