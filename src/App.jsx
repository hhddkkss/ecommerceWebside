import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/bee" element={<Dashboard />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="product" element={<Product />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
