import Signup from "./pages/auth/singup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import {Header} from "./pages/header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
function App() {
  return (
   <>
    <Header></Header>
    <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>


    </Routes>
   </>
  );
}

export default App;
