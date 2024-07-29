import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FaRegHeart, FaHeart} from 'react-icons/fa' 
import '../css/components.css'

const AnimalCard = ({animal}) => {
  const [marckedAsFavorite, setMarckedAsFavorite] = useState(false)

  const toggleFavorite = () => {
    setMarckedAsFavorite(!marckedAsFavorite)
  }

  return (
    <div className="animal-card">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {marckedAsFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>{animal.gender}</p>
      <Link to={`/animals/${animal.id}`}>+ Información</Link>
    </div>
  )
}

export default AnimalCard
