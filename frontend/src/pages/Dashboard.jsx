import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Header />

      <div className="layout">
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Menu</h3>

          <Card
            title="About Me"
            icon="👤"
            description="Mon CV et mes compétences"
            link="/dashboard/about"
          />

          <Card
            title="Mes Projets"
            icon="📁"
            description="Voir tous mes projets"
            link="/dashboard/projects"
          />
        </div>

        {/* CONTENT */}
        <div className="content">
          <Routes>
            <Route path="/" element={<h2>Home 🏠</h2>} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;