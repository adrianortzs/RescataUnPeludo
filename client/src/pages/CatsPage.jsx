import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../services/api'
import AnimalCard from '../components/AnimalCard'
import AnimalDetailPage from './AnimalDetailPage'
import '../css/pages.css'

const CatsPage = () => {
  const [cats, setCats] = useState([])
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
    api.getAllCats()
      .then(response => setCats(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="cats-page">
      <h2>¡ADOPTA UN GATO HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      {/* filtro */}
      <div className="animal-cards-container">
        {cats.map(cat => (
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

