const express = require('express')
const sendEmail = require('../controllers/emailsControllers')

const router = express.Router()

router.post('/', sendEmail)

module.exports = router