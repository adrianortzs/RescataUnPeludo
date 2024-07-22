const express = require('express')
const sequelize = require('./config/db')
const animalsRoutes = require('./routes/animalsRoutes')

const app = express()
const port = 3000

app.use(express.json())
app.use('/animals', animalsRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})