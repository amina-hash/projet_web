import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

export default function EditEtudiant() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [etudiant, setEtudiant] = useState({
    nom: "",
    prenom: "",
    cne: "",
    note1: "",
    note2: "",
    note3: ""
  })

  const handleChange = (e) => {
    setEtudiant({ ...etudiant, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/etudiants/${id}`)
      .then(res => setEtudiant(res.data)) // أو res.data.data حسب API ديالك
      .catch(err => console.log(err))
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault()

    axios.put(`http://127.0.0.1:8000/api/etudiants/${id}`, etudiant)
      .then(() => {
navigate(-1)      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container py-2 ds-main-narrow">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Modifier les notes</h1>
        <p>Étudiant sélectionné</p>
      </div>

      <div className="ds-surface ds-card-padding mb-4">
        <dl className="row small mb-0">
          <dt className="col-sm-3 text-body-secondary">CNE</dt>
          <dd className="col-sm-9 mb-2">{etudiant.cne}</dd>
          <dt className="col-sm-3 text-body-secondary">Nom</dt>
          <dd className="col-sm-9 mb-2">{etudiant.nom}</dd>
          <dt className="col-sm-3 text-body-secondary">Prénom</dt>
          <dd className="col-sm-9 mb-0">{etudiant.prenom}</dd>
        </dl>
      </div>

      <div className="ds-surface ds-card-padding">
        <form onSubmit={handleUpdate}>
          <p className="ds-section-title">Notes</p>

          <div className="mb-3">
            <label className="form-label" htmlFor="edit-note1">Module 1</label>
            <input
              id="edit-note1"
              name="note1"
              type="number"
              value={etudiant.note1 || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Note module 1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="edit-note2">Module 2</label>
            <input
              id="edit-note2"
              name="note2"
              type="number"
              value={etudiant.note2 || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Note module 2"
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="edit-note3">Module 3</label>
            <input
              id="edit-note3"
              name="note3"
              type="number"
              value={etudiant.note3 || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Note module 3"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-lg">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  )
}
