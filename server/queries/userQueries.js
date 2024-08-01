const client = require('../config/db')
const bcrypt = require('bcrypt')

const createUser = async (user) => {
  const { username, email, password, name } = user
  const hashedPassword = await bcrypt.hash(password, 10)
  const result = await client.query(
    'INSERT INTO users (username, email, password, name) VALUES ($1, $2, $3, $4) RETURNING *',
    [username, email, hashedPassword, name]
  )
  return result.rows[0]
}

const findUserByEmail = async (email) => {
  const result = await client.query('SELECT * FROM users WHERE email = $1', [email])
  return result.rows[0]
}

module.exports = { createUser, findUserByEmail }