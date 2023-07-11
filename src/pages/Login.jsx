import { useEffect, useState } from 'react'
import LoginComponent from '../components/login/LoginComponent'
import LoginModal from '../components/login/LoginModal'
import { Box } from '@mui/material'

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    return () => {
      setModalOpen(false)
    }
  }, [])

  return (
    <Box>
      <LoginModal modalOpen={modalOpen} />

      <LoginComponent setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </Box>
  )
}

export default Login
