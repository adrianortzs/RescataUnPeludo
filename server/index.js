const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const animalsRoutes = require('./routes/animalsRoutes')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())
app.use('/animals', animalsRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
