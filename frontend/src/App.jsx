import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import ProjectLayout from "./layouts/ProjectLayout";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Matrices from "./pages/Matrices";
import Formulaire from "./pages/Formulaire";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
      </Route>

      <Route path="/projects" element={<ProjectLayout />}>
        <Route path="matrices" element={<Matrices/>} />
        <Route path="formulaire" element={<Formulaire/>} />
        <Route path="images" element={<h2>Images 🖼️</h2>} />
        <Route path="quiz" element={<h2>Quiz ❓</h2>} />
      </Route>
    </Routes>
  );
}

export default App;