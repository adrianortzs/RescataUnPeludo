import { useEffect, useState } from 'react'
import api from '../services/api'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.getAllProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="animals-page">
      <h2>TIENDA</h2>
      <div className="animal-cards-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage