import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/global/NavBar'

const Dashboard = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet/>
    </>
  )
}

export default Dashboard
