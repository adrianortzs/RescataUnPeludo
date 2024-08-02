import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import api from '../services/api'
import '../css/components.css'

const Register = ({ onClose }) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        api.registerUser(userData)
        .then(response => {
            console.log(response.data)
            navigate('/login')
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={ onClose }>x</button>
                <form onSubmit={ handleSubmit } className="register-form">
                    <h2>REGISTRO</h2>
                    <input type="text" name="name" placeholder="Nombre" onChange={ handleChange } />
                    <input type="text" name="username" placeholder="Nombre de usuario" onChange={ handleChange } />
                    <input type="email" name="email" placeholder="Email" onChange={ handleChange } />
                    <input type="password" name="password" placeholder="Contraseña" onChange={ handleChange } />
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
  )
}

export default Register