import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";



 
 function DashboardLayout() {
    return (
    <div>
      <Header />

      <div style={{ display: "flex", minHeight: "80vh" }}>
        
      
            <Sidebar />
       
        
        <div style={styles.content}>
         <Outlet />
        
        </div>
      </div>

      <Footer />
    </div>
  );
 }
 const styles = {

  content: {
    flex: 1,
    padding: "20px",
    background: "#f4f6f9",
  },
};
 
 export default DashboardLayout