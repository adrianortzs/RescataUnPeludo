const pool = require('../config/db')

const allAnimals = async () => {
  const data = await pool.query('SELECT * FROM animals')
  return data.rows
}
  
const allCats = async () => {
  const data = await pool.query('SELECT * FROM animals WHERE type = $1', ['cat'])
  return data.rows
}
  
const allDogs = async () => {
  const data = await pool.query('SELECT * FROM animals WHERE type = $1', ['dog'])
  return data.rows
}

const animalDetail = async (id) => {
  const data = await pool.query('SELECT * FROM animals WHERE id = $1', [id])
  return data.rows[0]
}

const create = async (animal) => {
  const { type, name, age, race, health, image, location, user_id } = animal
  const result = await pool.query('INSERT INTO animals (type, name, age, race, health, image, location, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',[type, name, age, race, health, image, location, user_id])
  return result.rows[0]
}

const update = async (id, animal) => {
  const { type, name, age, race, health, image, location, user_id } = animal
  const result = await pool.query('UPDATE animals SET type = $1, name = $2, age = $3, race = $4, health = $5, image = $6, location = $7, user_id = $8 WHERE id = $9 RETURNING *',[type, name, age, race, health, image, location, user_id, id])
  return result.rows[0]
}

const deleted = async (id) => {
      await pool.query('DELETE FROM animals WHERE id = $1', [id])
}
  
module.exports = {allAnimals, allCats, allDogs, animalDetail, create, update, deleted}