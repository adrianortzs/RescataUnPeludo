import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AnimalList from './components/AnimalList'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className='app'>
        <NavBar/>
          <Routes>
            <Route path="/" element={<AnimalList />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
