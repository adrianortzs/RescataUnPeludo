import React, { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (animal) => {
    setFavorites((prevFavorites) => [...prevFavorites, animal])
  }

  const removeFromFavorites = (animalId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== animalId))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => useContext(FavoritesContext)

const favorite = {FavoritesProvider, useFavorites}

export default favorite
