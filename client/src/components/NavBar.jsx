import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import '../css/components.css'

const NavBar = ({isAuthenticated}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  console.log(dropdownOpen)

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://w0.peakpx.com/wallpaper/349/1022/HD-wallpaper-dog-and-cat-cat-animals-dog-animal-friends.jpg" alt="logo" />
        <span className="site-name">RESCATA UN PELUDO</span>
      </div>
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUser size={30} color='black' />
        {dropdownOpen && (
          <div className="dropdown-menu">
            <a href="users/register" className="dropdown-item">Registrarme</a>
            <a href="users/login" className="dropdown-item">Iniciar sesión</a>
          </div>)}
      </div>
      {isAuthenticated && <div className="welcome-message">Bienvenido</div>}
    </nav>
  )
}

export default NavBar
