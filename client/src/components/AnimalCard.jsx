import React from 'react'
import {Link} from 'react-router-dom'

const AnimalCard = ({animal}) => {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>{animal.race}</p>
      <Link to={`/animals/${animal.id}`}>+ Información</Link>
    </div>
  )
}

export default AnimalCard
