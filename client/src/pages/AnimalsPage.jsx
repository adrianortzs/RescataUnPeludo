import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import AnimalCard from '../components/AnimalCard';
import AllAnimalsFilters from '../components/AllAnimalsFilters';
import AnimalDetailPage from './AnimalDetailPage';
import '../css/pages.css';

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [showAnimalDetail, setShowAnimalDetail] = useState(false);
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setShowAnimalDetail(true);
    setSelectedAnimalId(id);
  };

  const handleClosePopup = () => {
    setShowAnimalDetail(false);
    setSelectedAnimalId(null);
  };

  useEffect(() => {
    api.getAllAnimals()
      .then(response => {
        setAnimals(response.data);
        setFilteredAnimals(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const applyFilterChange = (filters) => {
    const filtered = animals.filter(animal => {
      return (
        (filters.animal_type === '' || animal.animal_type === filters.animal_type) &&
        (filters.sex === '' || animal.sex === filters.sex) &&
        (filters.size === '' || animal.size.toLowerCase() === filters.size.toLowerCase()) &&
        (filters.age === '' || animal.age === filters.age) &&
        (filters.location === '' || animal.location.toLowerCase() === filters.location.toLowerCase())
      );
    });
    setFilteredAnimals(filtered);
  };

  return (
    <div className="animals-page">
      <h2>¡ADOPTA UN ANIMAL HOY!¡ENCUENTRA A TU COMPAÑERO IDEAL!</h2>
      <AllAnimalsFilters onFilterChange={applyFilterChange} />
      <div className="animal-cards-container">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} onShowDetails={() => handleCardClick(animal.id)} />
        ))}
      </div>
      {showAnimalDetail && selectedAnimalId && (
        <AnimalDetailPage onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default AnimalsPage;

