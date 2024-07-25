import React, { useEffect, useState } from 'react'
import animalService from '../services/animalService'
import AnimalCard from './AnimalCard'

const AnimalList = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await animalService.getAllAnimals()
      setAnimals(response.data)
    }

    fetchAnimals()
  }, [])

  return (
    <div className="animal-list">
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  )
}

export default AnimalList
