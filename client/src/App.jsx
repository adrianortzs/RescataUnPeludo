import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import HomePage from './pages/HomePage'
import CatsPage from './pages/CatsPage'
import DogsPage from './pages/DogsPage'
import AnimalDetailPage from './pages/AnimalDetailPage'
import AnimalsPage from './pages/AnimalsPage'
import AdoptPage from './pages/AdoptPage'
import ProductsPage from './pages/ProductsPage'
import FavoritesPage from './pages/FavoritesPage'
import CartPage from './pages/CartPage'


function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/animals/:id" element={<AnimalDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App