const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const animalsRoutes = require('./routes/animalsRoutes')
const userRoutes = require('./routes/usersRoutes')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())
app.use('/animals', animalsRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
