const express = require('express')
const {getAllAnimals, getAllCats, getAllDogs, getAnimalByID, createAnimal, updateAnimal, deleteAnimal} = require('../controllers/animalsControllers')
const authenticateToken = require('../middlewares/authentication')

const router = express.Router()

router.get('/', getAllAnimals)
router.get('/cats', getAllCats)
router.get('/dogs', getAllDogs)
router.get('/:id', getAnimalByID)
router.post('/', authenticateToken, createAnimal)
router.put('/:id', authenticateToken, updateAnimal)
router.delete('/:id', authenticateToken, deleteAnimal)

module.exports = router

