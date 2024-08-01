import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../services/api'
import AnimalCard from '../components/AnimalCard'
import AnimalDetailPage from './AnimalDetailPage'
import Filters from '../components/Filters'
import '../css/pages.css'

const CatsPage = () => {
  const [cats, setCats] = useState([])
  const [selectedAnimalId, setSelectedAnimalId] = useState(null)
  const [filteredCats, setFilteredCats] = useState([])

  const navigate = useNavigate()

  const handleCardClick = (id) => {
    setSelectedAnimalId(id)
    navigate(`animals/${id}`)
  }

  //no funciona
  const handleClosePopup = () => {
    setSelectedAnimalId(null)
    navigate(-1) //página anterior
  }

  useEffect(() => {
    api.getAllCats()
      .then(response => {
        setCats(response.data)
        setFilteredCats(response.data)})
      .catch(error => console.error(error))
  }, [])

  const handleFilterChange = (filters) => {
    const filtered = cats.filter(cat => {
      return (
        (filters.type === '' || cat.type === filters.type) &&
        (filters.race === '' || cat.race.toLowerCase().includes(filters.race.toLowerCase())) &&
        (filters.age === '' || cat.age === filters.age) &&
        (filters.gender === '' || cat.gender === filters.gender) &&
        (filters.color === '' || cat.color.toLowerCase().includes(filters.color.toLowerCase()))
      )
    })
    setFilteredCats(filtered)
  }

  return (
    <div className="dogs-cats">
      <h2>¡ADOPTA UN GATO HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      <Filters onFilterChange={handleFilterChange} />
      <div className="animal-cards-container">
        {filteredCats.map(cat => (
          <AnimalCard key={cat.id} animal={cat} onClick={() => handleCardClick(cat.id) }/>
        ))}
      </div>
      {selectedAnimalId && (
        <AnimalDetailPage onClose={handleClosePopup} />
      )}
    </div>
  )
}

export default CatsPage

