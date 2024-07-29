// import React, { useState } from 'react'
// import '../css/FilterAnimals.css'

// const Filters = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     type: '',
//     race: '',
//     age: '',
//     gender: '',
//     color: ''
//   })

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setFilters({
//       ...filters,
//       [name]: value
//     })
//   }

//   const handleApplyFilters = () => {
//     onFilterChange(filters)
//   }

//   return (
//     <div className="filters">
//       <div className="filter">
//         <label>Tipo de Animal
//           <select name="type" onChange={handleChange} value={filters.type}>
//             <option value="">Todos</option>
//             <option value="dog">Perros</option>
//             <option value="cat">Gatos</option>
//           </select>
//         </label>
//       </div>
//       <div className="filter">
//         <label>Raza
//           <input type="text" name="race" onChange={handleChange} value={filters.race} placeholder="Nombre de la raza" />
//         </label>
//       </div>
//       <div className="filter">
//         <label>Edad
//           <select name="age" onChange={handleChange} value={filters.age}>
//             <option value="">Cualquiera</option>
//             <option value="puppy">Cachorro</option>
//             <option value="adult">Adulto</option>
//           </select>
//         </label>
//       </div>
//       <div className="filter">
//         <label>Género
//           <select name="gender" onChange={handleChange} value={filters.gender}>
//             <option value="">Cualquiera</option>
//             <option value="female">Hembra</option>
//             <option value="male">Macho</option>
//           </select>
//         </label>
//       </div>
//       <div className="filter">
//         <label>Color
//           <input type="text" name="color" onChange={handleChange} value={filters.color} placeholder="Color del animal" />
//         </label>
//       </div>
//       <div className="filter">
//         <button onClick={handleApplyFilters}>Aplicar filtros</button>
//       </div>
//     </div>
//   )
// }

// export default Filters
