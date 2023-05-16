import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Products />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
