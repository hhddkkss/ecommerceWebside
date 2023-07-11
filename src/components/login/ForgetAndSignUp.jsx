import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setCondition } from '../../redux/userSlice'

const ForgetAndSignUp = () => {
  const dispatch = useDispatch()

  const handleChangeCondition = (param) => {
    dispatch(setCondition(param))
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="text"
        size="small"
        onClick={() => handleChangeCondition('forgetPassword')}
      >
        忘記密碼
      </Button>
      <Button variant="text" size="small">
        註冊帳號
      </Button>
    </Box>
  )
}

export default ForgetAndSignUp
