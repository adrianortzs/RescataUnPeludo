import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import api from '../services/api'
import '../css/pages.css'

const AnimalDetailPage = ({onClose}) => {
    const {id} = useParams()
    const [animal, setAnimal] = useState(null)
    
    useEffect(() => {
        api.getAnimalById(id)
        .then(response => setAnimal(response.data))
        .catch(error => console.error(error))
    }, [id])
    
    if (!animal) return <p>Loading...</p>
    
    return (
    <div className="popup-overlay">
        <div className="popup-content">
            <button className="popup-close" onClick={onClose}>x</button>
            <img src={animal.image} alt={animal.name} className="popup-image" />
            <h3>{animal.name}</h3>
            <p>Color: {animal.color}</p>
            <p>Race: {animal.race}</p>
            <p>Gender: {animal.gender}</p>
            <p>Age: {animal.age}</p>
            <p>Health: {animal.health}</p>
            <p>Location: {animal.location}</p>
        </div>
    </div>
  )
}

export default AnimalDetailPage