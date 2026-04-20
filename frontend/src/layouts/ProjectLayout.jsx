import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ProjectLayout() {
  return (
    <div>
      <Header />

      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default ProjectLayout;