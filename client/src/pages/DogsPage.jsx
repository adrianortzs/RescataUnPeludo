import {useEffect, useState} from 'react'
import api from '../services/api'
import AnimalCard from '../components/AnimalCard'
import '../css/pages.css'

const DogsPage = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    api.getAllDogs()
      .then(response => setDogs(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='dogs-page'>
      <h2>¡ADOPTA UN PERRO HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      {/* filtro */}
      <div className='animal-cards-container'>
        {dogs.map(dog => (
          <AnimalCard key={dog.id} animal={dog} />
        ))}
      </div>
    </div>
  )
}

export default DogsPage
