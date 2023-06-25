import { Outlet } from 'react-router-dom'
import NavBar from '../components/global/NavBar'
import NavigationPanel from '../components/global/NavigationPanel'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'

const Dashboard = () => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <NavBar />
      <Outlet />
      {/* 手機版的控制按鈕 */}
      {!match && <NavigationPanel />}
    </>
  )
}

export default Dashboard
