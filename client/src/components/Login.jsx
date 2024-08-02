import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import api from '../services/api'
import '../css/components.css'

const Login = ({ onClose }) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        api.loginUser(userData)
        .then(response => {
            const token = response.data.token
            localStorage.setItem('authToken', token)
            navigate('/')
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={ onClose }>x</button>
                <form onSubmit={ handleSubmit } className="register-form">
                    <h2>INICIAR SESION</h2>
                    <input type="email" name="email" placeholder="Email" onChange={ handleChange } />
                    <input type="password" name="password" placeholder="Contraseña" onChange={ handleChange } />
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
  )
}

export default Login