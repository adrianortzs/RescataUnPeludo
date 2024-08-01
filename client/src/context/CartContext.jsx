import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }

  const removeFromCart = (productSelected) => {
    setCart(prevCart => prevCart.filter(product => product !== productSelected))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

const cart = { CartProvider, useCart }

export default cart
