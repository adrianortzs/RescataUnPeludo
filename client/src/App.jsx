import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatsPage from './pages/CatsPage'
import DogsPage from './pages/DogsPage'
import AnimalDetailPage from './pages/AnimalDetailPage'
import AnimalsPage from './pages/AnimalsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/animals/:id" element={<AnimalDetailPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App