import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import AnimalCard from '../components/AnimalCard'
import Filters from '../components/Filters'
import AnimalDetailPage from './AnimalDetailPage'
import '../css/pages.css'

const CatsPage = () => {
  const navigate = useNavigate()
  const [cats, setCats] = useState([])
  const [filteredCats, setFilteredCats] = useState([])
  const [selectedAnimalId, setSelectedAnimalId] = useState(null)
  
  const showDetails = (id) => {
    navigate(`/animals/${id}`)
    setSelectedAnimalId(id)
  }

  const closeDetails = () => {
    setSelectedAnimalId(null)
    navigate(-1)
  }

  const selectedAnimal = cats.find(cat => cat.id === selectedAnimalId)

  useEffect(() => {
    api.getAllCats()
      .then(response => {
        setCats(response.data)
        setFilteredCats(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  const applyFilterChange = (filters) => {
    const filtered = cats.filter(cat => {
      return (
        (filters.sex === '' || cat.sex === filters.sex) &&
        (filters.size === '' || cat.size.toLowerCase() === filters.size.toLowerCase()) &&
        (filters.age === '' || cat.age.includes(filters.age)) &&
        (filters.location === '' || cat.location.toLowerCase() === filters.location.toLowerCase())
      )
    })
    setFilteredCats(filtered)
  }

  return (
    <div className='animals-page'>
      <h2>¡ADOPTA UN GATO HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      <Filters onFilterChange={applyFilterChange} />
      <div className='animal-cards-container'>
        {filteredCats.map(cat => (
          <AnimalCard key={cat.id} animal={cat} onShowDetails={showDetails}/>
        ))}
      </div>
      {selectedAnimalId && (
        <AnimalDetailPage animal={selectedAnimal} onClose={closeDetails} />
      )}
    </div>
  )
}

export default CatsPage
