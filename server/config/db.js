const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  user: String(process.env.DB_USER),
  host: String(process.env.DB_HOST),
  database: String(process.env.DB_NAME),
  password: String(process.env.DB_PASS),
  port: 5432
})

module.exports = pool
