const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { createUser, findUserByEmail, findUserById } = require('../queries/userQueries')

const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.status(201).json(user)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await findUserByEmail(email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email' })
    }
    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
      return res.status(401).json({ message: 'Invalid password' })
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.json({ token })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { registerUser, loginUser }
