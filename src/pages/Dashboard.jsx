import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/global/NavBar'
import { fetchCartData } from '../utils/cartHelper'
import NavigationPanel from '../components/global/NavigationPanel'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'

const Dashboard = () => {
  const theme = useTheme()

  const match = useMediaQuery(theme.breakpoints.up('sm'))

  const [cartItemQuantity, setCartItemQuantity] = useState(0)

  useEffect(() => {
    fetchCartData(1)
      .then((r) => setCartItemQuantity(r.length))
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <NavBar cartItemQuantity={cartItemQuantity} />
      <Outlet />
      {!match && <NavigationPanel cartItemQuantity={cartItemQuantity} />}
    </>
  )
}

export default Dashboard
