import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  normal: {
    textColorWhite: '#d7d7d7',
    deepBlue: '#233a66',
    wordGray: '#4f4f4f',
    orange1: '#e59069',
    deepYellow: '#f3d775',
  },
  palette: {
    primary: {
      main: '#233a66', // 設定主要按鈕的顏色
    },
    secondary: {
      main: '#4f4f4f',
    },
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/bee" element={<Dashboard />}>
              <Route path="home" element={<Home />}></Route>
              <Route path="product" element={<Product />}></Route>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
