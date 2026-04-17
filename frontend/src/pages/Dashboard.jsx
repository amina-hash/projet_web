import { Link, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
function Dashboard() {
  return (
    <div>
      <Header />

      <div style={{ display: "flex", minHeight: "80vh" }}>
        
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
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
        <div style={styles.content}>
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
const styles = {
  sidebar: {
    width: "200px",
    background: "#243457",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  content: {
    flex: 1,
    padding: "20px",
    background: "#f4f6f9",
  },
};

export default Dashboard;