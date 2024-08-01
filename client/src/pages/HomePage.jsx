import { useNavigate } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          className="homePage-carousel">
          <div><img src='https://cdn.unotv.com/images/2023/12/refugio-animales-140859.jpg' alt='home-image-1' /></div>
          <div><img src='https://cdn.colombia.com/sdi/2021/06/29/como-adoptar-un-perro-o-gato-en-bogota-requisitos-debes-cumplir-930252.jpg' alt='home-image-2'/></div>
          <div><img src='https://minuevomejoramigo.com/wp-content/uploads/2021/02/lugar-adopcion-perro.jpg' alt='home-image-3' /></div>
          <div><img src='https://gray-kcrg-prod.cdn.arcpublishing.com/resizer/FRWp6bLNfdFDok4o4x9bpAa6VYw=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/RC3UI5INEVF4HMP6PNXHIRW6QA.jpg' alt='home-image-4' /></div>
          <div><img src='https://a3noticias.com.mx/a3news/wp-content/uploads/2021/06/mascotas-en-adopcion-beneficios-y-requisitos-para-adoptar-un-perro-o-gato.png' alt='home-image-5' /></div>
        </Carousel>
      </header>
      <div className="homePage-content">
        <p className="homePage-subtitle">¿Quién será tu próximo compañero?</p>
        <div className="homePage-buttons">
          <button className="homePage-button" onClick={navigateTo('/dogs')}>🐶</button>
          <button className="homePage-button" onClick={navigateTo('/cats')}>😺</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage