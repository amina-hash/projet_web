import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Liste() {

  const [etudiants, setEtudiants] = useState([])

   const handleClicke=()=>{
     
   }
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/etudiants")
      .then(res => {
setEtudiants(res.data.data)      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container mt-4">

      <div className="bg-primary text-white p-3 text-center mb-4">
        <h2>Liste des étudiants enregistrés</h2>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-primary">
          <tr>
            <th>CNE</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Module 1</th>
            <th>Module 2</th>
            <th>Module 3</th>
            <th>Moyenne</th>


            <th>Modifier</th>
          </tr>
        </thead>

        <tbody>
          {etudiants.map((e, index) => (
            <tr key={index}>
              <td>{e.cne}</td>
              <td>{e.nom}</td>
              <td>{e.prenom}</td>
              <td>{e.note1}</td>
              <td>{e.note2}</td>
              <td>{e.note3}</td>
              <td>{e.moyenne}</td>
              <td>
<Link to={`/projects/formulaire/liste/${e.id}`}>Modifier</Link>              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Liste