import {useNavigate} from 'react-router-dom'
import '../css/pages.css'

const HomePage = () => {
  const navigate = useNavigate()

  const navigateTo = (path) => () => {
    navigate(path)
  }

  return (
    <div className="homePage">
      <header className="homePage-header">
        <h1>¡BIENVENIDO A RESCATA UN PELUDO!</h1>
        <p className="homePage-subtitle">Tu próximo mejor amigo te está esperando...</p>
      </header>
      <div className="homePage-content">
        <h4>¿Qué estás buscando?</h4>
        <div className="homePage-buttons">
          <button className="homePage-button" onClick={navigateTo('/dogs')}>Perros</button>
          <button className="homePage-button" onClick={navigateTo('/cats')}>Gatos</button>
          <button className="homePage-button" onClick={navigateTo('/animals')}>Ambos</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage

