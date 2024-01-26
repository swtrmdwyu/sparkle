import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import Account from "../pages/Account";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SingUp />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;