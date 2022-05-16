import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Administration/Inventory/Inventory";
import ManageMobile from "./components/Administration/Inventory/ManageMobile/ManageMobile";
import AddItems from "./components/Administration/ManageInventory/AddItems/AddItems";
import InventoryItems from "./components/Administration/ManageInventory/InventoryItems/InventoryItems";
import UpdateMobile from "./components/Administration/ManageInventory/InventoryItems/UpdateMobile/UpdateMobile";
import ManageInventory from "./components/Administration/ManageInventory/ManageInventory";
import MyInventory from "./components/Administration/ManageInventory/MyInventory/MyInventory";
import Login from "./components/Authentication/Login/Login";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";
import NavBar from "./components/HomePage/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/inventory/:inventoryId" element={<ManageMobile />} />
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        >
          <Route index path="mangeItems" element={<InventoryItems />} />
          <Route path="myinventory" element={<MyInventory />} />
          <Route path="addItem" element={<AddItems />} />
        </Route>
        <Route path="/manageInventory/:id" element={<UpdateMobile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
