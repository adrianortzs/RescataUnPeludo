import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AnimalList from './components/AnimalList'


function App() {
  return (
    <Router>
      <div className='app'>
        <header className="header">
          <h1>Rescata a un Peludo</h1>
          <Routes>
            <Route path="/" element={<AnimalList />} />
            {/* <Route path="/animals/:id" element={<AnimalDetail />} /> Detalles del animal */}
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
