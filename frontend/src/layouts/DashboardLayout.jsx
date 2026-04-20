import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../pages/Dashboard.css";

 
 function DashboardLayout() {
   return (
      <div>
        <h1>teeest layout</h1>
      <Header />

      <div className="layout">
        
        <div className="sidebar">
            <Sidebar />
        </div>
        
        <div className="content">
         <Outlet />
        
        </div>
      </div>

      <Footer />
    </div>
   )
 }
 
 export default DashboardLayout