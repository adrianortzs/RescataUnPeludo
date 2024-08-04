import favorite from '../context/FavoriteContext'
import AnimalCard from '../components/AnimalCard'
import '../css/components.css'

const FavoritesPage = () => {
  const { favorites, removeFavorite } = favorite.useFavorites()

  return (
    <div className="favorites-page">
      <h2>Favoritos</h2>
      <div className="animal-list">
        {favorites.length > 0 ? (
          favorites.map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onShowDetails={(id) => console.log(`Mostrar detalles del animal con id: ${id}`)}
              onToggleFavorite={removeFavorite}
            />
          ))
        ) : (
          <p>Añade animales a favoritos para verlos aquí.</p>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
