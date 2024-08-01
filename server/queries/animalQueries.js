const client = require('../config/db')

const allAnimals = async () => {
  const data = await client.query('SELECT * FROM animals')
  return data.rows
}
  
const allCats = async () => {
  const data = await client.query('SELECT * FROM animals WHERE animal_type = $1', ['Gato'])
  return data.rows
}
  
const allDogs = async () => {
  const data = await client.query('SELECT * FROM animals WHERE animal_type = $1', ['Perro'])
  return data.rows
}

const animalDetail = async (id) => {
  const data = await client.query('SELECT * FROM animals WHERE id = $1', [id])
  return data.rows[0]
}

const create = async (animal) => {
  const { type, name, age, race, health, image, location, gender, color } = animal
  const result = await client.query('INSERT INTO animals (type, name, age, race, health, image, location, gender, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',[type, name, age, race, health, image, location, gender, color])
  return result.rows[0]
}

const update = async (id, animal) => {
  const { type, name, age, race, health, image, location} = animal
  const result = await client.query('UPDATE animals SET type = $1, name = $2, age = $3, race = $4, health = $5, image = $6, location = $7 WHERE id = $8 RETURNING *',[type, name, age, race, health, image, location, id])
  return result.rows[0]
}

const deleted = async (id) => {
      await client.query('DELETE FROM animals WHERE id = $1', [id])
}
  
module.exports = {allAnimals, allCats, allDogs, animalDetail, create, update, deleted}