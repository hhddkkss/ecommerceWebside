import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material'
import { CompareContextProvider } from './context/CompareContext'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from './redux/productSlice'
import { fetchUserCart } from './redux/cartSlice'
import { setLogin } from './redux/userSlice'

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
      'jf-openhuninn',
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
      'creamfont',
    ].join(','),
  },
})

function App() {
  const { memberId } = useSelector((state) => state.user.profile)
  const dispatch = useDispatch()
  const loginInfo = JSON.parse(localStorage.getItem('beebeeMemberAuth'))

  useEffect(() => {
    //每次去抓產品資訊
    dispatch(getProduct())
    dispatch(fetchUserCart(memberId))
    if (loginInfo) {
      dispatch(setLogin(loginInfo))
    }
  }, [memberId])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CompareContextProvider>
          <Routes>
            <Route path="/bee" element={<Dashboard />}>
              <Route index element={<Home />}></Route>
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
