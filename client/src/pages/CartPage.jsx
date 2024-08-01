import cartContext from '../context/CartContext'
import '../css/pages.css'

const CartPage = () => {
  const { cart, removeFromCart } = cartContext.useCart()

  const handleRemove = (productSelected) => {
    removeFromCart(productSelected)
  }

  const handleCheckout = () => {
    // Lógica para proceder con la compra
    alert('Proceder con la compra')
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
                <button className="remove-button" onClick={() => handleRemove(product)}>Eliminar</button>
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
