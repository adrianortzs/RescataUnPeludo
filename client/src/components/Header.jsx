import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import favorite from '../context/FavoriteContext'
import Login from './Login'
import '../css/components.css'
import Register from './Register'

const Header = () => {
  const navigate = useNavigate()
  const [profileMenu, setProfileMenu] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const { favorites } = favorite.useFavorites();

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      setLogIn(true)
    }
  }, [])

  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu)
  }

  const logOut = () => {
    localStorage.removeItem('authToken')
    setLogIn(false)
    setRegister(false)
    setProfileMenu(false)
    navigate('/')
  }

  const closeLogIn = () => {
    setShowLogin(false)
    setLogIn(true)
  }

  const closeRegister = () => {
    setShowRegister(false)
    setRegister(register)
  }

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src="https://images.hola.com/imagenes/mascotas/20190412140510/razas-de-perro-para-convivir-con-gato/0-668-422/perros-gatos-t.jpg" alt="Logo" className="logo" />
          <span className="company-name">RESCATA UN PELUDO</span>
        </div>
        <nav className="header-center">
          <Link to="/animals">Quiero Adoptar</Link>
          <Link to="/adopt">Quiero Acoger</Link>
          <Link to="/products">Tienda</Link>
        </nav>
        <div className="header-right">
          <div className="profile-icon" onClick={toggleProfileMenu}>
            <i className="bi bi-person-fill"></i>
          </div>
          {profileMenu && (
            <div className="dropdown-menu">
              {logIn ? (
                <div>
                  <Link to="/favorites">Favoritos({favorites.length})</Link>
                  <Link to="/cart">Mi Carrito</Link>
                  <button onClick={logOut}>Cerrar Sesión</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => setShowLogin(true)}>Iniciar Sesión</button>
                  <button onClick={() => setShowRegister(true)}>Registrarse</button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
      {showLogin && <Login onClose={closeLogIn} />}
      {showRegister && <Register onClose={closeRegister} />}
    </>
  )
}

export default Header
