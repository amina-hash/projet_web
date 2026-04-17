import { Link } from "react-router-dom";

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

      <div style={styles.grid}>
        {projects.map((proj, index) => (
          <Link
            key={index}
            to={proj.link}
            style={{ textDecoration: "none", color: "inherit"  }}
          >
            <div style={styles.card}>
              <div style={styles.icon}>{proj.icon}</div>
              <h3>{proj.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "white",
    padding: "10px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },
  icon: {
    fontSize: "20px",
    marginBottom: "10px",
  },
};

export default Projects;