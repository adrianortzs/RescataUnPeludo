import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import favorite from '../context/FavoriteContext'; 
import '../css/components.css'

const AnimalCard = ({animal, onShowDetails}) => {
  const { addToFavorites, removeFromFavorites, favorites } = favorite.useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === animal.id);
  const [marckedAsFavorite, setMarckedAsFavorite] = useState(false)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(animal.id);
      setMarckedAsFavorite(false)
    } else {
      addToFavorites(animal);
      setMarckedAsFavorite(true)
    }
  };

  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <div className="animal-card-section">
        <p>{animal.name}</p>
        <p>{animal.sex}</p>
      </div>
      <div className="animal-card-section">
        <p>{animal.age}</p>
        <p>{animal.location}</p>
      </div>
      <div className="animal-card-section">
        <button onClick={() => onShowDetails(animal.id)}>Conóceme</button>
        <div className="favorite-icon" onClick={toggleFavorite}>
          {marckedAsFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  )
}

export default AnimalCard
