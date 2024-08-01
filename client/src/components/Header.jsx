// Header.jsx
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import favorite from '../context/FavoriteContext'
import '../css/components.css'

const Header = () => {
  const navigate = useNavigate()
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)
  const { favorites } = favorite.useFavorites() // Use the favorites context

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      setIsLogIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setIsLogIn(false)
    setProfileMenuOpen(false)
    navigate('/login')
  }

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-left">
        <img src="https://images.hola.com/imagenes/mascotas/20190412140510/razas-de-perro-para-convivir-con-gato/0-668-422/perros-gatos-t.jpg" alt="Logo" className="logo" />
        <span className="company-name">RESCATA UN PELUDO</span>
      </div>
      <nav className="header-center">
        <Link to="/animals">Quiero Adoptar</Link>
        <Link to="/adopt">Quiero Acoger</Link>
        <Link to="/products">Productos</Link>
      </nav>
      <div className="header-right">
        <div className="profile-icon" onClick={ toggleProfileMenu }>
          <i className="bi bi-person-fill"></i>
        </div>
        {profileMenuOpen && (
          <div className="dropdown-menu">
            {isLogIn ? (
              <div>
                <Link to="/favorites">Favoritos ({favorites.length})</Link> {/* Link to favorites page */}
                <Link to="/cart">Mi Carrito</Link>
                <button onClick={ handleLogout }>Cerrar Sesión</button>
              </div>
            ) : (
              <div>
                <Link to="/login">Iniciar Sesión</Link>
                <Link to="/register">Registrarse</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
