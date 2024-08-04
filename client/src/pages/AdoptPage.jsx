import { useState } from 'react'
import api from '../services/api'
import '../css/pages.css'

const AdoptPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    mobile: '',
    email: '',
    location: '',
    animal_type: '',
    animal_name: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('click')
    api.sendEmail(formData)
    .then(response => {
      console.log('Success:', response.data)
      alert('Formulario enviado exitosamente')
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Hubo un error al enviar el formulario')
    })
  }

  return (
    <div className="adopt-page">
      <h2>FORMULARIO DE ADOPCIÓN</h2>
      <p>¿Quieres ser casa de acogida de alguno de nuestros peludos?</p>
      <p>Déjanos tus datos y te contactaremos lo antes posible</p>
      <form onSubmit={ handleSubmit } className="contact-form">
        <div className="form-group">
          <input type="text" name="name" value={formData.name} onChange={ handleChange } placeholder='Nombre' required />
        </div>
        <div className="form-group">
          <input type="text" name="surname" value={formData.surname} onChange={ handleChange } placeholder='Apellido' required />
        </div>
        <div className="form-group">
          <input type="tel" name="mobile" value={formData.mobile} onChange={ handleChange } placeholder='Teléfono'required/>
        </div>
        <div className="form-group">
          <input type="email" name="email" value={formData.email} onChange={ handleChange } placeholder='Email' required />
        </div>
        <div className="form-group">
          <input type="text" name="location" value={formData.location} onChange={ handleChange } placeholder='Provincia' required />
        </div>
        <div className="form-group">
          <select name="animal_type" value={formData.animal_type} onChange={ handleChange } required>
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
          </select>
        </div>
        <div className="form-group">
            <label>¿Te interesa alguno en particular?
                <input type="text" name="animal_name" value={formData.animal_name} onChange={ handleChange }/>
            </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default AdoptPage
