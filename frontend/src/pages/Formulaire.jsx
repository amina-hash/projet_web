import React, { useState } from 'react'
import axios from 'axios'

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
    <div className="container mt-4">

      <div className="bg-primary text-white p-3 rounded shadow mb-4">
        <h2 className="text-center m-0">
          Gestion de formulaire
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="card shadow border-0 p-4">

        <h5 className="text-primary mb-3">Information</h5>

        <input name="nom" onChange={handleChange} placeholder="Nom" className="form-control mb-2" />
        <input name="prenom" onChange={handleChange} placeholder="Prénom" className="form-control mb-2" />
        <input name="cne" onChange={handleChange} placeholder="CNE" className="form-control mb-2" />

        <h5 className="text-primary mt-4 mb-3">Notes des modules</h5>

        <input name="note1" type="number" onChange={handleChange} placeholder="Module 1" className="form-control mb-2" />
        <input name="note2" type="number" onChange={handleChange} placeholder="Module 2" className="form-control mb-2" />
        <input name="note3" type="number" onChange={handleChange} placeholder="Module 3" className="form-control mb-2" />

        <button className="btn btn-primary w-100 mt-3">
          Valider
        </button>

      </form>

    </div>
  )
}

export default Formulaire