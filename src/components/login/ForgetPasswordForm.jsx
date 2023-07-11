import AccountCircle from '@mui/icons-material/AccountCircle'
import PasswordIcon from '@mui/icons-material/Password'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import KeyIcon from '@mui/icons-material/Key'
import MailIcon from '@mui/icons-material/Mail'
import VerifiedIcon from '@mui/icons-material/Verified'
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  useTheme,
  IconButton,
  Button,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCondition } from '../../redux/userSlice'
import axios from 'axios'

const inputFieldStyle = {
  mb: 5,
}
const ForgetPasswordForm = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    newPassword: '',
    verificationCode: '',
  })
  const [visibility, setVisibility] = useState(false)

  const [isVerify, setIsVerify] = useState(false)

  const [passwordSame, setPasswordSame] = useState('empty')

  const handleUserInputChange = (InputName, value) => {
    setUserInput({ ...userInput, [InputName]: value })
  }

  const handleVisible = () => {
    setVisibility(!visibility)
  }

  const handleChangeCondition = (param) => {
    dispatch(setCondition(param))
  }

  const handleValidationEmail = async (email) => {
    const res = await axios
      .get(`http://192.168.1.104:3003/change_password/forget/${email}`)
      .catch((e) => console.log(e))

    console.log(res)
  }

  const handleVerification = async (number) => {
    const res = await axios.get(
      `http://192.168.1.104:3003/change_password/confirm_verification_code/${number}`
    )
    const result = res.data.state

    if (result === 'success') {
      setIsVerify(true)
    } else {
      setIsVerify(false)
    }

    console.log(result)
  }

  const handleChangePassword = async (email, newPassword) => {
    const oldPass = userInput.password

    if (oldPass.trim() === newPassword.trim() && !'') {
      const res = await axios
        .put(`http://192.168.1.104:3003/change_password/`, {
          email,
          newPassword,
        })
        .then(setTimeout(handleChangeCondition('login'), 2000))
    }
  }

  return (
    <Box
      sx={{
        background: 'rgba(200,200,200,0.6)',
        width: { xs: '90%', md: '500px' },
        borderRadius: '10px',
        padding: '1rem',
        border: '10px solid rgba(200,200,200,0.6)',
        boxShadow: '10px 10px 70px rgba(0,0,0,0.6)',
        filter: `drop-shadow(100px 500px 500 yellow) drop-shadow(100px 200px 200px gray)`,
      }}
    >
      <Typography
        onClick={() => {
          setUserInput({
            email: 'chuwork.99@gmail.com',
            password: '',
            newPassword: '',
            verificationCode: '',
          })
        }}
        variant="h5"
        align="center"
        color={theme.normal.wordGray}
        sx={{ mb: 2 }}
      >
        忘記密碼
      </Typography>
      <Box noValidate autoComplete="off" component="form" sx={{ mb: 2 }}>
        <TextField
          id="email"
          autoComplete="off"
          label="帳號/email"
          required
          fullWidth
          placeholder="請輸入您的帳號/email"
          color="secondary"
          value={userInput.email}
          onChange={(e) => handleUserInputChange(e.target.name, e.target.value)}
          sx={inputFieldStyle}
          InputLabelProps={{ htmlFor: 'email' }}
          InputProps={{
            style: { letterSpacing: 2 },
            name: 'email',
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                onClick={() => {
                  handleValidationEmail(userInput.email)
                }}
              >
                <Typography sx={{ fontSize: '12px' }}>獲取驗證碼</Typography>
                <MailIcon />
              </IconButton>
            ),
          }}
          variant="filled"
        />

        <TextField
          id="verificationCode"
          placeholder="請輸入您的驗證碼"
          autoComplete="off"
          InputLabelProps={{ htmlFor: 'verificationCode' }}
          label="驗證碼"
          value={userInput.verificationCode}
          onChange={(e) => handleUserInputChange(e.target.name, e.target.value)}
          type="text"
          required
          fullWidth
          color="secondary"
          sx={inputFieldStyle}
          InputProps={{
            name: 'verificationCode',
            style: { letterSpacing: 2 },
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                onClick={() => handleVerification(userInput.verificationCode)}
              >
                <InputAdornment position="end">
                  <Typography sx={{ fontSize: '12px' }}>
                    {isVerify ? '已認證' : '點擊認證'}
                  </Typography>
                  <VerifiedIcon />
                </InputAdornment>
              </IconButton>
            ),
          }}
          variant="filled"
        />

        <TextField
          id="password"
          placeholder="請輸入您的新密碼"
          autoComplete="off"
          InputLabelProps={{ htmlFor: 'password' }}
          label="新密碼"
          value={userInput.password}
          onChange={(e) => handleUserInputChange(e.target.name, e.target.value)}
          type={visibility ? 'text' : 'password'}
          required
          fullWidth
          color="secondary"
          sx={inputFieldStyle}
          InputProps={{
            name: 'password',
            style: { letterSpacing: 2 },
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton onClick={handleVisible}>
                <InputAdornment position="end">
                  {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </InputAdornment>
              </IconButton>
            ),
          }}
          variant="filled"
          disabled={isVerify ? false : true}
        />

        <TextField
          id="newPassword"
          placeholder="請再次輸入您的新密碼"
          autoComplete="off"
          InputLabelProps={{ htmlFor: 'newPassword' }}
          label="再次輸入新密碼"
          value={userInput.newPassword}
          onChange={(e) => handleUserInputChange(e.target.name, e.target.value)}
          type={visibility ? 'text' : 'password'}
          required
          fullWidth
          color="secondary"
          sx={inputFieldStyle}
          InputProps={{
            name: 'newPassword',
            style: { letterSpacing: 2 },
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton onClick={handleVisible}>
                <InputAdornment position="end">
                  {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </InputAdornment>
              </IconButton>
            ),
          }}
          variant="filled"
          disabled={isVerify ? false : true}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            fullWidth={!match}
            sx={{ mb: { xs: 2, md: 0 } }}
            onClick={() => handleChangeCondition('login')}
          >
            返回登入畫面
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth={!match}
            disabled={isVerify ? false : true}
            onClick={() =>
              handleChangePassword(userInput.email, userInput.newPassword)
            }
          >
            確認修改
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgetPasswordForm
