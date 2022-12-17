import { Routes, Route } from "react-router-dom";
import Delivery from "../Pages/Delivery";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Pedidos from "../Pages/Pedidos";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/login.jsx"
import Profile from "../Pages/Profile";


const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/pedidos" element={<Pedidos />} />   
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRouter;