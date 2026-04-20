import { Routes, Route } from "react-router-dom";
import ProjectLayout from "./layouts/ProjectLayout";
import Projects from "./pages/Projects";

function AppRoutes() {
  return (
    <Routes>

  

      {/* PROJECTS (NO sidebar) */}
      <Route path="/dashboard/projects" element={<ProjectLayout />}>
        <Route path="matrices" element={<h2>Matrices 🧮</h2>} />
        <Route path="formulaire" element={<h2>Formulaire 📄</h2>} />
        <Route path="images" element={<h2>Images 🖼️</h2>} />
        <Route path="quiz" element={<h2>Quiz ❓</h2>} />
      </Route>

    </Routes>
  )
}

export default AppRoutes