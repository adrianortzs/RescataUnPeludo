const Animal = require('../models/Animal')

getAllAnimals = async (req,res) => {
    try {
        const animals = await Animal.findAll()
        res.json(animals)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

getAllCats = async (req,res) => {
    try {
        const cats = await Animal.findAll({where: {animal_type: 'cat'}})
        res.json(cats)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

getAllDogs = async (req,res) => {
    try {
        const dogs = await Animal.findAll({where: {animal_type: 'dog'}})
        res.json(dogs)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

getAnimalByID = async (req, res) => {
    try {
        const id = req.params.id
        const animalDetail = await Animal.findByPk(id)
        res.json(animalDetail)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

createAnimal = async (req,res) => {
    try {
        const {animal_type, breed_type, name, age, health, image, location, user_id} = req.body
        const newAnimal = await Animal.create({animal_type, breed_type, name, age, health, image, location, user_id})
        res.status(201).json(newAnimal)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

updateAnimal = async (req,res) => {
    try {
        const id = req.params.id
        const {animal_type, breed_type, name, age, health, image, location, user_id} = req.body
        const animal = await Animal.findByPk(id)
        if (animal) {
            animal.animal_type = animal_type
            animal.breed_type = breed_type
            animal.name = name
            animal.age = age
            animal.health = health
            animal.image = image
            animal.location = location
            animal.user_id = user_id

            await animal.save()
            res.json(animal)
        } else {
            res.status(404).send('Animal not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

deleteAnimal = async (req,res) => {
    try {
        const id = req.params.id
        const animal = await Animal.findByPk(id)
        if (animal) {
            await animal.destroy()
            res.status(410).send('Deleted')
        } else {
            res.status(404).send('Animal not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = {getAllAnimals, getAllCats, getAllDogs, getAnimalByID, createAnimal, updateAnimal, deleteAnimal}