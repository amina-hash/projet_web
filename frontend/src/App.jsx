import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />} children={ <Route path="about" element={<h2>home 🧮</h2>} /> }/>
            <Route path="/dashboard/" element={<Dashboard />} children={ <Route path="projects" element={<h2>projects 🧮</h2>} /> }/>

      
    </Routes>
  );
}

export default App;