import cartContext from '../context/CartContext'
import '../css/components.css'

const ProductCard = ({ product }) => {
  const { addToCart } = cartContext.useCart()

  const handleAddToCart = () => {
    addToCart(product)
    alert('Producto añadido al carrito')
  }
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
      <div className="shop-icon" onClick={handleAddToCart}>
        <i class="bi bi-bag-check-fill"></i>
      </div>
    </div>
  )
}

export default ProductCard