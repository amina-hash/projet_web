import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    })
    .then((res) => {
      console.log("SUCCESS:", res.data);
      alert("Welcome " + res.data.user);
      navigate("/dashboard");
    })
    .catch((err) => {
      console.log(err.response?.data);
      alert("Invalid credentials");
    });
  };

  return (
    <div className="ds-app">
      <Header />

      <main className="flex-grow-1 d-flex align-items-center justify-content-center px-3 py-5">
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <div className="ds-page-header text-center mb-4">
            <h1 className="ds-page-title">Connexion</h1>
            <p className="mb-0">Accédez à votre espace portfolio</p>
          </div>

          <div className="ds-surface ds-card-padding">
            <div className="text-center mb-4">
              <p className="fs-2 mb-2" aria-hidden>👋</p>
              <p className="text-body-secondary small mb-0">
                Utilisez vos identifiants pour continuer
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="login-password" className="form-label">
                Mot de passe
              </label>
              <input
                id="login-password"
                type="password"
                className="form-control form-control-lg"
                placeholder="••••••••"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-lg w-100"
              onClick={handleLogin}
            >
              Se connecter
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
