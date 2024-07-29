// src/components/CreateAnimal.js
// import React, { useState } from 'react';
// import animalService from '../services/animalService';

// const CreateAnimal = ({ token }) => {
//   const [form, setForm] = useState({
//     type: '',
//     name: '',
//     age: '',
//     race: '',
//     health: '',
//     image: '',
//     location: '',
//     gender: '',
//     color: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await animalService.createAnimal(form, token);
//     // Redirige o actualiza la lista de animales
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="type" value={form.type} onChange={handleChange} placeholder="Tipo" />
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
//       <input name="age" value={form.age} onChange={handleChange} placeholder="Edad" />
//       <input name="race" value={form.race} onChange={handleChange} placeholder="Raza" />
//       <input name="health" value={form.health} onChange={handleChange} placeholder="Salud" />
//       <input name="image" value={form.image} onChange={handleChange} placeholder="Imagen" />
//       <input name="location" value={form.location} onChange={handleChange} placeholder="Ubicación" />
//       <input name="gender" value={form.gender} onChange={handleChange} placeholder="Género" />
//       <input name="color" value={form.color} onChange={handleChange} placeholder="Color" />
//       <button type="submit">Crear Animal</button>
//     </form>
//   );
// };

// export default CreateAnimal;
