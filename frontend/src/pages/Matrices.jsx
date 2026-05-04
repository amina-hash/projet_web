import { useState } from "react";

function Matrices() {
  return (
    <div className="container mt-4">

      {/* Row pour les deux matrices */}
      <div className="row">

        {/* Matrice 1 */}
        <div className="col-md-6">
          <div className="card shadow p-3">
            <div className="bg-primary text-white text-center p-2 mb-3">
              Matrice N°1
            </div>

            <label>Nombre de lignes :</label>
            <input className="form-control mb-2" />

            <label>Nombre de colonnes :</label>
            <input className="form-control mb-3" />

            <button className="btn btn-outline-primary mb-3">
              Générer des valeurs aléatoires
            </button>

            <label>Valeurs générées :</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>

        {/* Matrice 2 */}
        <div className="col-md-6">
          <div className="card shadow p-3">
            <div className="bg-primary text-white text-center p-2 mb-3">
              Matrice N°2
            </div>

            <label>Nombre de lignes :</label>
            <input className="form-control mb-2" />

            <label>Nombre de colonnes :</label>
            <input className="form-control mb-3" />

            <button className="btn btn-outline-primary mb-3">
              Générer des valeurs aléatoires
            </button>

            <label>Valeurs générées :</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>

      </div>

      {/* Bottom section */}
      <div className="row mt-4">

        <div className="col-md-6 text-center">
          <button className="btn btn-success mb-2">
            Calculer Somme
          </button>

          <textarea
            className="form-control"
            rows="4"
            placeholder="Résultat de la Somme"
          ></textarea>
        </div>

        <div className="col-md-6 text-center">
          <button className="btn btn-success mb-2">
            Calculer Produit
          </button>

          <textarea
            className="form-control"
            rows="4"
            placeholder="Résultat du Produit"
          ></textarea>
        </div>

      </div>
    </div>
  );
}

export default Matrices;