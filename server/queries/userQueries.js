const pool = require('../config/db')
const bcrypt = require('bcrypt')

const createUser = async (user) => {
  const { username, email, password, name, image } = user
  const hashedPassword = await bcrypt.hash(password, 10)
  const result = await pool.query(
    'INSERT INTO users (username, email, password, name, image) VALUES ($1, $2, $3) RETURNING *',
    [username, email, hashedPassword, name, image]
  )
  return result.rows[0]
}

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  return result.rows[0]
}

const findUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  return result.rows[0]
}

module.exports = { createUser, findUserByEmail, findUserById }