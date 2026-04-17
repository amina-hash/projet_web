import { Link } from "react-router-dom";

function Card({ title, icon, description, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div style={styles.card}>
        <div style={styles.icon}>{icon}</div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    background: "#3778c6",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    cursor: "pointer",
    transition: "0.3s",
  },
  icon: {
    fontSize: "30px",
    marginBottom: "10px",
  },
};

export default Card;