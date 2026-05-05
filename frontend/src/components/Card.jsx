import { Link } from "react-router-dom";

function Card({ title, icon, description, link }) {
  return (
    <Link to={link} className="ds-sidebar-card">
      <div className="fs-2 mb-2">{icon}</div>
      <h3 className="h6 fw-semibold mb-1">{title}</h3>
      <p className="small mb-0 opacity-90">{description}</p>
    </Link>
  );
}

export default Card;
