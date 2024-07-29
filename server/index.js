const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const animalsRoutes = require('./routes/animalsRoutes')
const userRoutes = require('./routes/usersRoutes')
const productsRoutes = require('./routes/productsRoutes')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())
app.use('/animals', animalsRoutes)
app.use('/users', userRoutes)
app.use('/products', productsRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
