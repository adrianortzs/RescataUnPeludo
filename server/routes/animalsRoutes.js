const express = require('express')
const {getAllAnimals, getAllCats, getAllDogs, getAnimalByID, createAnimal, updateAnimal, deleteAnimal} = require('../controllers/animalsControllers')

const router = express.Router()

router.get('/', getAllAnimals)
router.get('/cats', getAllCats)
router.get('/dogs', getAllDogs)
router.get('/:id', getAnimalByID)
router.post('/', createAnimal)
router.put('/:id', updateAnimal)
router.delete('/:id', deleteAnimal)

module.exports = router

