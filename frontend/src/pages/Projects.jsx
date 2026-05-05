import { Link } from "react-router-dom";

const projects = [
  { title: "Matrices JS", link: "matrices", icon: "🧮" },
  { title: "Formulaire PHP", link: "formulaire", icon: "📄" },
  { title: "Images DB", link: "images", icon: "🖼️" },
  { title: "Quiz", link: "quiz", icon: "❓" },
  { title: "ChartJS", link: "stats", icon: "📊" },
  { title: "Géolocalisation", link: "geolocalisation", icon: "📍" },
];

function Projects() {
  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Mes projets</h1>
        <p>Choisissez un module pour ouvrir la démo</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <Link
            key={index}
            to={`/projects/${proj.link}`}
            className="project-link"
          >
            <div className="project-card">
              <div className="project-icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
