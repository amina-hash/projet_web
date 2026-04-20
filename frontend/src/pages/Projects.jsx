import { Link } from "react-router-dom";
import "./Projects.css";


const projects = [
  { title: "Matrices JS", link: "matrices", icon: "🧮" },
  { title: "Formulaire PHP", link: "formulaire", icon: "📄" },
  { title: "Images DB", link: "images", icon: "🖼️" },
  { title: "Quiz", link: "quiz", icon: "❓" },
  { title: "ChartJS", link: "stats", icon: "📊" },
  { title: "Géolocalisation", link: "maps", icon: "📍" },
];

function Projects() {
  return (
    <div>
      <h2>Mes Projets 📁</h2>

      <div className="grid">
        {projects.map((proj, index) => (
          <Link
            key={index}
            to={`/projects/${proj.link}`}
            className="link"
          >
            <div className="card">
              <div className="icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;