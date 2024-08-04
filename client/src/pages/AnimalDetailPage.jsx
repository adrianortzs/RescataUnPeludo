import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; 
import api from '../services/api';
import '../css/pages.css';

const AnimalDetailPage = ({ onClose }) => {
  const { id } = useParams();
  const [animal, setAnimal] = useState([]);
  const [markedAsFavorite, setMarkedAsFavorite] = useState(false);

  const toggleFavorite = () => {
    setMarkedAsFavorite(!markedAsFavorite);
  };

  useEffect(() => {
    api.getAnimalById(id)
      .then(response => setAnimal(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="info-popup-overlay">
      <div className="info-popup-card">
        <button className="info-popup-close" onClick={() => onClose(false)}>x</button>
        <img src={animal.image} alt={animal.name} className="info-popup-image" />
        <div className="info-popup-header">
          <h3 className="info-popup-title">Nombre: {animal.name}</h3>
          <div className="info-popup-favorite" onClick={toggleFavorite}>
            {markedAsFavorite ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
        <div className="info-popup-details">
          <p>Sexo: {animal.sex}</p>
          <p>Tamaño: {animal.size}</p>
          <p>Edad: {animal.age}</p>
          <p>Color: {animal.color}</p>
          <p>Ubicación: {animal.location}</p>
        </div>
        <Link to='/adopt'>¡Quiero adoptar!</Link>
      </div>
    </div>
  );
};

export default AnimalDetailPage;