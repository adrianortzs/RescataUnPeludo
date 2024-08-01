import { useState } from 'react'
import '../css/components.css'

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    sex: '',
    size: '',
    age: '',
    location: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilters({
      ...filters,
      [name]: value
    })
  }

  const applyFilters = () => {
    onFilterChange(filters)
  }

  return (
    <div className="filters">
      <div className="filter">
        <select name="sex" onChange={handleChange} value={filters.sex}>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
      </div>
      <div className="filter">
        <input type="text" name="size" placeholder='Tamaño' onChange={handleChange} value={filters.size} />
      </div>
      <div className="filter">
        <input type="text" name="age" placeholder='Edad' onChange={handleChange} value={filters.age} />
      </div>
      <div className="filter">
        <input type="text" name="location" placeholder='Ubicación'onChange={handleChange} value={filters.location} />
      </div>
      <div className="filter">
        <button onClick={applyFilters}>Aplicar filtros</button>
      </div>
    </div>
  )
}

export default Filters
