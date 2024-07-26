const express = require('express')
const { registerUser, loginUser, getUserProfile } = require('../controllers/usersControllers')
const authentication = require('../middlewares/authentication')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', authentication, getUserProfile)

module.exports = router