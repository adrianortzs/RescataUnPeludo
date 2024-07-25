const {allAnimals, allCats, allDogs, animalDetail, create, update, deleted} = require('../queries/animalQueries')

const getAllAnimals = async (req,res) => {
    try {
        const animals = await allAnimals()
        res.json(animals)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getAllCats = async (req,res) => {
    try {
        const cats = await allCats()
        res.json(cats)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getAllDogs = async (req,res) => {
    try {
        const dogs = await allDogs()
        res.json(dogs)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getAnimalByID = async (req, res) => {
    try {
        const id = req.params.id
        const detail = await animalDetail(id)
        res.json(detail)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const createAnimal = async (req,res) => {
    try {
        const newAnimal = await create(req.body)
        res.status(201).json(newAnimal)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const updateAnimal = async (req,res) => {
    try {
        const id = req.params.id
        const animal = await update(id, req.body)
        res.json(animal)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteAnimal = async (req,res) => {
    try {
        const id = req.params.id
        await deleted(id)
        res.status(204).end()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = {getAllAnimals, getAllCats, getAllDogs, getAnimalByID, createAnimal, updateAnimal, deleteAnimal}
