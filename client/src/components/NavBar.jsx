import React from 'react'
import { FaUser } from 'react-icons/fa'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://w0.peakpx.com/wallpaper/349/1022/HD-wallpaper-dog-and-cat-cat-animals-dog-animal-friends.jpg" alt="logo" />
        <span className="site-name">RESCATA A UN PELUDO</span>
      </div>
      <div className="profile-icon">
        <a href="/registro">
          <FaUser size={30} color='black'/>
        </a>
      </div>
    </nav>
  )
}

export default NavBar