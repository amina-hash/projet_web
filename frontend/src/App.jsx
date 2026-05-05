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
import Quiz2 from "./pages/Quiz2";
import Geolocalisation from "./pages/Geolocalisation";
import Stats from "./pages/Stats";
import DashboardHome from "./pages/DashboardHome";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
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
                    <Route path="quiz2" element={<Quiz2 />} />

        </Route>  
          <Route path="geolocalisation" element={<Geolocalisation />} />
                    <Route path="stats" element={<Stats />} />

          </Route>
    </Routes>
  );
}

export default App;