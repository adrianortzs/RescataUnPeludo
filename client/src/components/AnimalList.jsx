import React, { useEffect, useState } from 'react'
import animalService from '../services/animalService'
import AnimalCard from './AnimalCard'
import FilterAnimals from './FilterAnimals'
import '../css/AnimalList.css'

const AnimalList = () => {
  const [animals, setAnimals] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await animalService.getAllAnimals()
      setAnimals(response.data)
    }

    fetchAnimals()
  }, [])

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  const filteredAnimals = animals.filter(animal => !filter || animal.type === filter)

  return (
    <div className="animal-list">
      <FilterAnimals onFilterChange={handleFilterChange} />
      {filteredAnimals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  )
}

export default AnimalList
