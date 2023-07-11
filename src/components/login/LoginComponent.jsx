import LoginForm from './LoginForm'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../redux/userSlice'
import { useCallback } from 'react'
import ForgetPasswordForm from './ForgetPasswordForm'

const LoginComponent = ({ setModalOpen }) => {
  const profile = useSelector((state) => state.user.profile)
  const { authorized } = profile
  const condition = useSelector((state) => state.user.loginState)

  //switch case切換狀態 -> 顯示 忘記密碼 or 註冊帳號 or 登入 表格
  function renderSwitch(param) {
    switch (true) {
      case !authorized && condition === 'login': {
        return <LoginForm setModalOpen={setModalOpen} />
      }
      case condition === 'forgetPassword': {
        return <ForgetPasswordForm />
      }
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '100vh', md: 'calc(100vh - 68.5px)' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        filter: 'contrast(80%)',
      }}
      style={{
        background:
          'no-repeat  url("/src/assets/images/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg")top left, 100% 100%',
      }}
    >
      {/* 沒登入 顯示登入表格 */}
      {useCallback(renderSwitch(condition), [condition])}

      <Box></Box>
    </Box>
  )
}

export default LoginComponent
