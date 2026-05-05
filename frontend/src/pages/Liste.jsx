import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Liste() {

  const [etudiants, setEtudiants] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/etudiants")
      .then(res => {
setEtudiants(res.data.data)      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Liste des étudiants</h1>
        <p>Données enregistrées côté serveur</p>
      </div>

      <div className="ds-table-wrap">
        <div className="table-responsive">
          <table className="table table-hover align-middle text-center mb-0">
            <thead className="table-light">
              <tr>
                <th>CNE</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Module 1</th>
                <th>Module 2</th>
                <th>Module 3</th>
                <th>Moyenne</th>
                <th className="text-end pe-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {etudiants.map((e, index) => (
                <tr key={index}>
                  <td className="fw-medium">{e.cne}</td>
                  <td>{e.nom}</td>
                  <td>{e.prenom}</td>
                  <td>{e.note1}</td>
                  <td>{e.note2}</td>
                  <td>{e.note3}</td>
                  <td>{e.moyenne}</td>
                  <td className="text-end pe-3">
                    <Link
                      to={`/projects/formulaire/liste/${e.id}`}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Modifier
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Liste
