import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000/api";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  const handleLogout = async () => {
    const token = localStorage.getItem("auth_token");
    try {
      await axios.post(
        `${API_BASE}/logout`,
        {},
        token
          ? { headers: { Authorization: `Bearer ${token}` } }
          : undefined
      );
    } catch {
      /* déconnexion locale même si l’API échoue */
    }
    localStorage.removeItem("auth_token");
    navigate("/", { replace: true });
  };

  return (
    <header
      className="navbar navbar-expand-lg navbar-dark border-bottom border-white border-opacity-10 shadow-sm py-3"
      style={{
        background:
          "linear-gradient(135deg, #3730a3 0%, #4f46e5 55%, #6366f1 100%)",
      }}
    >
      <div className="container-fluid px-3 px-lg-4 d-flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="navbar-brand mb-0 fw-semibold fs-5">
          Master RSI — Portfolio
        </span>
        {!isLoginPage && (
          <button
            type="button"
            className="btn btn-outline-light btn-sm px-3"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
