const express = require('express')
const {getAllProducts, sendOrderConfirmationEmail} = require('../controllers/productsControllers')

const router = express.Router()

router.get('/', getAllProducts)
router.post('/', sendOrderConfirmationEmail);

module.exports = router