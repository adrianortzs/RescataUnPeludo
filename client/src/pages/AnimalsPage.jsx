import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../services/api'
import AnimalCard from '../components/AnimalCard'
import AnimalDetailPage from './AnimalDetailPage'
import '../css/pages.css'

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([])
  const [selectedAnimalId, setSelectedAnimalId] = useState(null)

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
    api.getAllAnimals()
      .then(response => setAnimals(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="dogs-page">
      <h2>¡ADOPTA UN ANIMAL HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      {/* filtro */}
      <div className="animal-cards-container">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} onClick={() => handleCardClick(animal.id) }/>
        ))}
      </div>
      {selectedAnimalId && (
        <AnimalDetailPage onClose={handleClosePopup} />
      )}
    </div>
  )
}

export default AnimalsPage

