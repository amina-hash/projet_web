import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./login.css";
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
    <div>
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back 👋</h2>
          <p>Login to access your dashboard</p>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;