import { useState } from "react";

function Matrices() {


  // Matrice 1
  const [matrice1, setMatrice1] = useState({
    nbrLigne: 0,
    nbrColonne: 0,
  });

  // Matrice 2
  const [matrice2, setMatrice2] = useState({
    nbrLigne: 0,
    nbrColonne: 0,
  });

  const [values1, setValues1] = useState([]);
  const [values2, setValues2] = useState([]);
const [sumResult, setSumResult] = useState([]);
const [mulResult, setMulResult] = useState([]);
  // Generate matrix
  const generateMatrix = (rows, cols) => {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.floor(Math.random() * 10));
      }
      matrix.push(row);
    }

    return matrix;
  };

  // Format
  const formatMatrix = (matrix) => {
    return matrix.map(row => row.join(" ")).join("\n");
  };

  // Handlers
  const handleChangeMatrice1 = (e) => {
    setMatrice1({
      ...matrice1,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleChangeMatrice2 = (e) => {
    setMatrice2({
      ...matrice2,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleClickMatrice1 = () => {
    const m = generateMatrix(matrice1.nbrLigne, matrice1.nbrColonne);
    setValues1(m);
  };

  const handleClickMatrice2 = () => {
    const m = generateMatrix(matrice2.nbrLigne, matrice2.nbrColonne);
    setValues2(m);
  };
const addMatrices = (A, B) => {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < A[i].length; j++) {
      row.push(A[i][j] + B[i][j]);
    }
    result.push(row);
  }

  return result;
};

const handleSum = () => {

  if (
    values1.length !== values2.length ||
    values1[0].length !== values2[0].length
  ) {
    alert("Les matrices doivent avoir la même taille !");
    return;
  }

  const result = addMatrices(values1, values2);
  setSumResult(result);
};

const multiplyMatrices = (A, B) => {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    const row = [];

    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < A[0].length; k++) {
        sum += A[i][k] * B[k][j];
      }

      row.push(sum);
    }

    result.push(row);
  }

  return result;
};
const handleProduit = () => {

  if (!values1.length || !values2.length) {
    alert("Génère les deux matrices d'abord !");
    return;
  }

  if (values1[0].length !== values2.length) {
    alert("Le nombre de colonnes de A doit être égal au nombre de lignes de B !");
    return;
  }

  const result = multiplyMatrices(values1, values2);
  setMulResult(result);
};
  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Matrices</h1>
        <p>Génération, somme et produit</p>
      </div>

      <div className="row g-4">

        {/* Matrice 1 */}
        <div className="col-md-6">
          <div className="ds-surface ds-card-padding h-100">
            <div className="ds-panel-heading">
              Matrice N°1
            </div>

            <label className="form-label">Nombre de lignes</label>
            <input
              name="nbrLigne"
              value={matrice1.nbrLigne}
              onChange={handleChangeMatrice1}
              type="number"
              className="form-control mb-3"
            />

            <label className="form-label">Nombre de colonnes</label>
            <input
              name="nbrColonne"
              value={matrice1.nbrColonne}
              onChange={handleChangeMatrice1}
              type="number"
              className="form-control mb-3"
            />

            <button
              type="button"
              onClick={handleClickMatrice1}
              className="btn btn-outline-primary w-100 mb-3"
            >
              Générer des valeurs aléatoires
            </button>

<textarea
  className="form-control font-monospace small"
  rows="5"
  value={formatMatrix(values1)}
  readOnly
/>          </div>
        </div>

        {/* Matrice 2 */}
        <div className="col-md-6">
          <div className="ds-surface ds-card-padding h-100">
            <div className="ds-panel-heading">
              Matrice N°2
            </div>

            <label className="form-label">Nombre de lignes</label>
            <input
              name="nbrLigne"
              value={matrice2.nbrLigne}
              onChange={handleChangeMatrice2}
              type="number"
              className="form-control mb-3"
            />

            <label className="form-label">Nombre de colonnes</label>
            <input
              name="nbrColonne"
              value={matrice2.nbrColonne}
              onChange={handleChangeMatrice2}
              type="number"
              className="form-control mb-3"
            />

            <button
              type="button"
              onClick={handleClickMatrice2}
              className="btn btn-outline-primary w-100 mb-3"
            >
              Générer des valeurs aléatoires
            </button>

<textarea
  className="form-control font-monospace small"
  rows="5"
  value={formatMatrix(values2)}
  readOnly
/>          </div>
        </div>
        

      </div>
           <div className="row g-4 mt-1">

        <div className="col-md-6">
       <div className="ds-surface ds-card-padding text-center h-100">
       <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleSum}>
         Calculer la somme
       </button>

<textarea
  className="form-control font-monospace small text-start"
  rows="4"
  value={formatMatrix(sumResult)}
  readOnly
/>        </div></div>

        <div className="col-md-6">
        <div className="ds-surface ds-card-padding text-center h-100">
        <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleProduit}>
          Calculer le produit
        </button>

<textarea
  className="form-control font-monospace small text-start"
  rows="4"
  value={formatMatrix(mulResult)}
  readOnly
/>        </div></div>

      </div>

    </div>
  );
}

export default Matrices;
