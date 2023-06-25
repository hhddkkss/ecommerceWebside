import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material'
import { CompareContextProvider } from './context/CompareContext'
import Login from './pages/Login'
import Cart from './pages/Cart'

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
    orange: {
      main: '#e59069',
    },
    white: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Righteous',
      'jf-openhuninn',
      'creamfont',
    ].join(','),
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CompareContextProvider>
          <Routes>
            <Route path="/bee" element={<Dashboard />}>
              <Route path="home" element={<Home />}></Route>
              <Route path="product" element={<Product />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="cart" element={<Cart />}></Route>
            </Route>
          </Routes>
        </CompareContextProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
