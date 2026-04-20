import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>teeestDashboard</h1>
      <Header />

      <div className="layout">
        
      
            <Sidebar />
       
        
        <div className="content">
         <Outlet />
        
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;