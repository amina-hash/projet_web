import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ProjectLayout() {
  return (
    <div className="ds-app">
      <Header />

      <main className="ds-main flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ProjectLayout;
