import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div className="ds-app">
      <Header />

      <div className="d-flex flex-grow-1 min-vh-0">
        <Sidebar />

        <main className="ds-main ds-dashboard-main flex-grow-1 overflow-auto">
          <div className="ds-dashboard-inner">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
