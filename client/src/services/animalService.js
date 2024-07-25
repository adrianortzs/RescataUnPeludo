import axios from 'axios'

const api_url = 'http://localhost:3000/animals'

const getAllAnimals = async () => {
    return await axios.get(api_url)
}

const getAllCats = async () => {
    return await axios.get(`${api_url}/cats`)
}

const getAllDogs = async () => {
    return await axios.get(`${api_url}/dogs`)
}

const getAnimalByID = async (id) => {
    return await axios.get(`${api_url}/${id}`)
}

const createAnimal = async (animal) => {
    return await axios.post(api_url, animal)
}

const updateAnimal = async (id,animal) => {
    return await axios.put(`${api_url}/${id}`, animal)
}

const deleteAnimal = async (id) => {
    return await axios.delete(`${api_url}/${id}`)
}

const animalService = {getAllAnimals, getAllCats, getAllDogs, getAnimalByID, createAnimal, updateAnimal, deleteAnimal}

export default animalService