import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Stats() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/etudiants")
      .then((res) => setStudents(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  // 🎨 colors
  const colors = students.map(
    () =>
      `rgba(${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            0.6)`
  );

  const data = {
    labels: students.map((s) => `${s.nom} ${s.prenom}`),
    datasets: [
      {
        label: "Moyenne des étudiants 📊",
        data: students.map((s) => s.moyenne),
        backgroundColor: colors,
        borderRadius: 8,

        // 🔥 مهم باش الأعمدة مايبقوش عراض
        categoryPercentage: 0.6,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Statistiques des étudiants",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Stats 📊
      </h2>

      <div
        style={{
          width: "85%",
          height: "450px",
          margin: "auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Stats;