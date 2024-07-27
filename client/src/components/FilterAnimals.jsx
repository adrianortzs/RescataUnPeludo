import React from 'react'
import '../css/FilterAnimals.css'

const SubHeader = ({ onFilterChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target
    onFilterChange(name, value)
  }

  return (
    <div className="subheader">
      <div className="filter">
        <label>Edad
          <select name="age" onChange={handleChange}>
            <option value="">Todas</option>
            <option value="puppy">Cachorro</option>
            <option value="adult">Adulto</option>
          </select>
        </label>
      </div>
      <div className="filter">
        <label>Raza
          <input type="text" name="race" onChange={handleChange} placeholder="Nombre de la raza" />
        </label>
      </div>
      <div className="filter">
        <label>Tipo de Animal
          <select name="type" onChange={handleChange}>
            <option value="">Todos</option>
            <option value="dog">Perros</option>
            <option value="cat">Gatos</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default SubHeader
