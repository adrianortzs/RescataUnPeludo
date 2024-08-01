import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (animal) => {
    setFavorites((prevFavorites) => [...prevFavorites, animal]);
  };

  const removeFromFavorites = (animalId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== animalId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => useContext(FavoritesContext);

const favorite = {FavoritesProvider, useFavorites}

export default favorite
