import { Link } from "react-router-dom";

function DashboardHome() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-50 py-4">
      <div
        className="w-100 text-center mb-4"
        style={{ maxWidth: "40rem" }}
      >
        <h1 className="h2 fw-semibold text-body mb-2">
          Bienvenue sur votre espace
        </h1>
        <p className="text-body-secondary mb-0">
          Choisissez une section dans le menu ou accédez rapidement aux contenus
          ci-dessous.
        </p>
      </div>

      <div
        className="row g-3 g-md-4 justify-content-center w-100"
        style={{ maxWidth: "52rem" }}
      >
        <div className="col-12 col-md-6">
          <Link
            to="/dashboard/about"
            className="text-decoration-none d-block h-100"
          >
            <div className="ds-surface ds-card-padding h-100 ds-dashboard-tile">
              <div className="fs-1 mb-2" aria-hidden>
                👤
              </div>
              <h2 className="h5 fw-semibold text-body mb-2">About Me</h2>
              <p className="small text-body-secondary mb-0">
                Profil, formation, compétences et projets académiques.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <Link
            to="/dashboard/projects"
            className="text-decoration-none d-block h-100"
          >
            <div className="ds-surface ds-card-padding h-100 ds-dashboard-tile">
              <div className="fs-1 mb-2" aria-hidden>
                📁
              </div>
              <h2 className="h5 fw-semibold text-body mb-2">Mes projets</h2>
              <p className="small text-body-secondary mb-0">
                Accès aux démos : matrices, formulaire, quiz, stats, carte, etc.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
