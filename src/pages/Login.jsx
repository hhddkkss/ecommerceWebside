import { useEffect, useState } from 'react'
import LoginComponent from '../components/login/LoginComponent'
import LoginModal from '../components/login/LoginModal'

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    return () => {
      setModalOpen(false)
    }
  }, [])
  return (
    <>
      <LoginModal modalOpen={modalOpen} />
      <LoginComponent setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default Login
