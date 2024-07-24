const express = require('express')
const cors = require('cors')
const sequelize = require('./config/db')
const animalsRoutes = require('./routes/animalsRoutes')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/animals', animalsRoutes)

const start = async () => {
    try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(port, () => {
        console.log(`Server running on ${port}`)
      })
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
  
start()
