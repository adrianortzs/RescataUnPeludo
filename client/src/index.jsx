import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import cart from './context/CartContext'
import favorite from './context/FavoriteContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <cart.CartProvider>
      <favorite.FavoritesProvider>
        <App />
      </favorite.FavoritesProvider>
    </cart.CartProvider>
  </React.StrictMode>
)

