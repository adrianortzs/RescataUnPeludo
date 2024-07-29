import axios from 'axios'

const api_url = 'http://localhost:3001'

const getAllAnimals = () => axios.get(`${api_url}/animals`)
const getAllCats = () => axios.get(`${api_url}/animals/cats`)
const getAllDogs = () => axios.get(`${api_url}/animals/dogs`)
const getAnimalById = (id) => axios.get(`${api_url}/animals/${id}`)
const createAnimal = (animal, token) =>
    axios.post(`${api_url}/animals`, animal, {
    headers: { Authorization: `Bearer ${token}` }
})
const updateAnimal = (id, animal, token) =>
  axios.put(`${api_url}/animals/${id}`, animal, {
    headers: { Authorization: `Bearer ${token}` }
})
const deleteAnimal = (id, token) =>
  axios.delete(`${api_url}/animals/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })

const registerUser = (user) => axios.post(`${api_url}/users/register`, user)
const loginUser = (credentials) => axios.post(`${api_url}/users/login`, credentials)

const api = {getAllAnimals, getAllCats, getAllDogs, getAnimalById, createAnimal, updateAnimal, deleteAnimal, registerUser, loginUser}

export default api
