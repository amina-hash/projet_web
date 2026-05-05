import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Formulaire() {

  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    cne: '',
    note1: 0,
    note2: 0,
    note3: 0
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const moyenne = () => {
    return (
      (Number(form.note1) +
       Number(form.note2) +
       Number(form.note3)) / 3
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://127.0.0.1:8000/api/etudiants", {
      nom: form.nom,
      prenom: form.prenom,
      cne: form.cne,
      note1: form.note1,
      note2: form.note2,
      note3: form.note3,
      moyenne: moyenne()
    })
    .then(res => {
      console.log(res.data)
      alert("Données envoyées avec succès")
    })
    .catch(err => {
      console.log(err)
      alert("Erreur")
    })
  }

  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Gestion de formulaire</h1>
        <p>Saisie et envoi des données étudiant</p>
      </div>

      <div className="ds-surface ds-card-padding">
        <form onSubmit={handleSubmit}>
          <p className="ds-section-title">Informations</p>

          <div className="mb-3">
            <label className="form-label" htmlFor="form-nom">Nom</label>
            <input id="form-nom" name="nom" onChange={handleChange} placeholder="Nom" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="form-prenom">Prénom</label>
            <input id="form-prenom" name="prenom" onChange={handleChange} placeholder="Prénom" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="form-cne">CNE</label>
            <input id="form-cne" name="cne" onChange={handleChange} placeholder="CNE" className="form-control" />
          </div>

          <p className="ds-section-title">Notes des modules</p>

          <div className="mb-3">
            <label className="form-label" htmlFor="form-note1">Module 1</label>
            <input id="form-note1" name="note1" type="number" onChange={handleChange} placeholder="Note module 1" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="form-note2">Module 2</label>
            <input id="form-note2" name="note2" type="number" onChange={handleChange} placeholder="Note module 2" className="form-control" />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="form-note3">Module 3</label>
            <input id="form-note3" name="note3" type="number" onChange={handleChange} placeholder="Note module 3" className="form-control" />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">
              Valider
            </button>
            <Link to="liste" className="btn btn-outline-primary">
              Consulter la liste
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Formulaire
