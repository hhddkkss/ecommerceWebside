import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
