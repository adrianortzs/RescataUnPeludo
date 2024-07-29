// import React, { useState } from 'react';
// import { createAnimal } from '../services/api';

// const AnimalForm = ({ token }) => {
//   const [formData, setFormData] = useState({
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
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createAnimal(formData, token)
//       .then(response => console.log(response.data))
//       .catch(error => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="type" placeholder="Type" onChange={handleChange} />
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//       <input type="number" name="age" placeholder="Age" onChange={handleChange} />
//       <input type="text" name="race" placeholder="Race" onChange={handleChange} />
//       <input type="text" name="health" placeholder="Health" onChange={handleChange} />
//       <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
//       <input type="text" name="location" placeholder="Location" onChange={handleChange} />
//       <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
//       <input type="text" name="color" placeholder="Color" onChange={handleChange} />
//       <button type="submit">Add Animal</button>
//     </form>
//   );
// };

// export default AnimalForm;
