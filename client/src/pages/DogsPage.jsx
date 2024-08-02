import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import AnimalCard from '../components/AnimalCard'
import Filters from '../components/Filters'
import AnimalDetailPage from './AnimalDetailPage'
import '../css/pages.css'

const DogsPage = () => {
  const navigate = useNavigate()
  const [dogs, setDogs] = useState([])
  const [filteredDogs, setFilteredDogs] = useState([])
  const [selectedAnimalId, setSelectedAnimalId] = useState(null)
  
  const showDetails = (id) => {
    navigate(`/animals/${id}`)
    setSelectedAnimalId(id)
  }

  const closeDetails = () => {
    setSelectedAnimalId(null)
    navigate(-1)
  }

  const selectedAnimal = dogs.find(dog => dog.id === selectedAnimalId)

  useEffect(() => {
    api.getAllDogs()
      .then(response => {
        setDogs(response.data)
        setFilteredDogs(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  const applyFilterChange = (filters) => {
    const filtered = dogs.filter(dog => {
      return (
        (filters.sex === '' || dog.sex === filters.sex) &&
        (filters.size === '' || dog.size.toLowerCase() === filters.size.toLowerCase()) &&
        (filters.age === '' || dog.age.includes(filters.age)) &&
        (filters.location === '' || dog.location.toLowerCase() === filters.location.toLowerCase())
      )
    })
    setFilteredDogs(filtered)
  }

  return (
    <div className='animals-page'>
      <h2>¡ADOPTA UN PERRO HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      <Filters onFilterChange={applyFilterChange} />
      <div className='animal-cards-container'>
        {filteredDogs.map(dog => (
          <AnimalCard key={dog.id} animal={dog} onShowDetails={showDetails}/>
        ))}
      </div>
      {selectedAnimalId && (
        <AnimalDetailPage animal={selectedAnimal} onClose={closeDetails} />
      )}
    </div>
  )
}

export default DogsPage
