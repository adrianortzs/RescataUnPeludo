import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaRegHeart, FaHeart} from 'react-icons/fa' 
import api from '../services/api'
import '../css/pages.css'

const AnimalDetailPage = ({ onClose }) => {
    const {id} = useParams()
    const [animal, setAnimal] = useState([])
    const [marckedAsFavorite, setMarckedAsFavorite] = useState(false)

    const toggleFavorite = () => {
        setMarckedAsFavorite(!marckedAsFavorite)
    }
    
    useEffect(() => {
        api.getAnimalById(id)
        .then(response => setAnimal(response.data))
        .catch(error => console.error(error))
    }, [id])
    
    return (
    <div className="popup-overlay">
        <div className="popup-content">
            <button className="popup-close" onClick={onClose}>x</button>
            <img src={animal.image} alt={animal.name} className="popup-image" />
            <div>
                <h3>Nombre: {animal.name}</h3>
                <div className="favorite-icon" onClick={toggleFavorite}>
                    {marckedAsFavorite ? <FaHeart /> : <FaRegHeart />}
                </div>
            </div>
            <p>Sexo: {animal.sex}</p>
            <p>Tamaño: {animal.size}</p>
            <p>Edad: {animal.age}</p>
            <p>Color: {animal.color}</p>
            <p>Ubicación: {animal.location}</p>
            <button>¡Quiero adoptar!</button>
        </div>
    </div>
  )
}

export default AnimalDetailPage