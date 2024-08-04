import favorite from '../context/FavoriteContext'
import '../css/components.css'

const AnimalCard = ({animal, onShowDetails}) => {
  const { addToFavorites, removeFromFavorites, favorites } = favorite.useFavorites()
  const isFavorite = favorites.some((fav) => fav.id === animal.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(animal.id)
    } else {
      addToFavorites(animal)
    }
  }

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
          <p>Favorito</p>
        </div>
      </div>
    </div>
  )
}

export default AnimalCard
