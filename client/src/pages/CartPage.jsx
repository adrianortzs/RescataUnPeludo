import { useEffect } from 'react'
import userContext from '../context/UserContext'
import cartContext from '../context/CartContext'
import api from '../services/api'
import '../css/pages.css'

const CartPage = () => {
  const { cart, removeFromCart } = cartContext.useCart()
  const { user } = userContext.useUser()

  useEffect(() => {
    console.log('Cart:', cart)
    console.log('User:', user)
  }, [cart, user])

  const handleRemove = (productSelected) => {
    removeFromCart(productSelected)
  }

  const handleCheckout = async () => {
    try {
      console.log('Checkout payload:', { cart, user })
      const response = await api.sendOrderConfirmationEmail({ cart, user })
      alert('Proceder con la compra')
      console.log(response.data)
    } catch (error) {
      console.error('Error al procesar la compra:', error)
      alert('Hubo un error al procesar la compra')
    }
  }

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price">{product.price}</div>
                  <button className="remove-button" onClick={() => handleRemove(product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="checkout-button" onClick={handleCheckout}>Comprar</button>
        </div>
      )}
    </div>
  )
}

export default CartPage
