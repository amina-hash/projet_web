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
    <>
      <div className="mb-3">
        <h4>Étudiant :</h4>
        <p><strong>CNE:</strong> {etudiant.cne}</p>
        <p><strong>Nom:</strong> {etudiant.nom}</p>
        <p><strong>Prénom:</strong> {etudiant.prenom}</p>
      </div>

      <form onSubmit={handleUpdate}>

        <input
          name="note1"
          value={etudiant.note1 || ""}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="note2"
          value={etudiant.note2 || ""}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="note3"
          value={etudiant.note3 || ""}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <button className="btn btn-success">Modifier</button>
      </form>
    </>
  )
}