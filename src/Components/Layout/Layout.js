
import Navigation from "../../Routes/Navigation/Navigation";
import { Outlet } from "react-router-dom";




export default function Layout() {

    

  return (
    <>
    <Navigation />  
    <Outlet />
    </>
  )
}