import {useState} from 'react'
import api from '../services/api'
import '../css/pages.css'

const LoginPage = ({onClose}) => {
  const [loginData, setLoginData] = useState({
    credentials: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    api.loginUser(loginData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>x</button>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>INICIAR SESIÓN</h2>
          <input type="text" name="credentials" placeholder="Nombre de usuario o email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
