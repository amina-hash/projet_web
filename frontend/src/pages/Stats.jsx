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

const CHART_BAR_COLORS = [
  "rgba(79, 70, 229, 0.78)",
  "rgba(99, 102, 241, 0.78)",
  "rgba(129, 140, 248, 0.78)",
  "rgba(165, 180, 252, 0.85)",
  "rgba(196, 181, 253, 0.85)",
  "rgba(167, 139, 250, 0.78)",
  "rgba(139, 92, 246, 0.78)",
  "rgba(124, 58, 237, 0.72)",
];

function Stats() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/etudiants")
      .then((res) => setStudents(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const colors = students.map(
    (_, i) => CHART_BAR_COLORS[i % CHART_BAR_COLORS.length]
  );

  const data = {
    labels: students.map((s) => `${s.nom} ${s.prenom}`),
    datasets: [
      {
        label: "Moyenne des étudiants",
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
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Statistiques</h1>
        <p>Visualisation des moyennes</p>
      </div>

      <div className="ds-surface ds-card-padding">
        <div style={{ height: "min(60vh, 480px)" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
