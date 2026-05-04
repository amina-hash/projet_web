import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import ProjectLayout from "./layouts/ProjectLayout";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Matrices from "./pages/Matrices";
import Formulaire from "./pages/Formulaire";
import Images from "./pages/Images";
import Quiz from "./pages/Quiz";
import Quiz1 from "./pages/Quiz1";
import Liste from "./pages/Liste";
import EditEtudiant from "./pages/EditEtudiant";
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
<Route path="formulaire">
  <Route index element={<Formulaire />} />
  <Route path="liste" element={<Liste />} />
  <Route path="liste/:id" element={<EditEtudiant />} />
</Route>        <Route path="images" element={<Images/>} />
<Route path="quiz">
          <Route index element={<Quiz />} />
          <Route path="quiz1" element={<Quiz1 />} />
        </Route>    
          </Route>
    </Routes>
  );
}

export default App;