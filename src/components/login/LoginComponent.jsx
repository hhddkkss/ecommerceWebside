import AccountCircle from '@mui/icons-material/AccountCircle'
import PasswordIcon from '@mui/icons-material/Password'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import {
  Box,
  TextField,
  Typography,
  useTheme,
  InputAdornment,
  IconButton,
  Button,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'
import { loginApi } from '../../utils/LoginHelper'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../redux/userSlice'

const inputFieldStyle = {
  mb: 5,
}

const LoginComponent = ({ setModalOpen }) => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  const navigation = useNavigate()
  const profile = useSelector((state) => state.user.profile)
  const { authorized } = profile

  const dispatch = useDispatch()

  const [visibility, setVisibility] = useState(false)

  const [userInput, setUserInput] = useState({ email: '', password: '' })

  const [loginError, setLoginError] = useState('')

  const handleUserInputChange = (InputName, value) => {
    setUserInput({ ...userInput, [InputName]: value })
  }

  const handleVisible = () => {
    setVisibility(!visibility)
  }

  const handleSubmit = (e) => {
    //form表單中的按鈕會自動跳轉
    e.preventDefault()

    //檢查帳密不為空
    if (
      userInput.email.trim().length == 0 ||
      userInput.password.trim().length == 0
    ) {
      setLoginError('帳號密碼皆為必填')
    } else {
      //檢查帳號密碼
      loginApi(userInput)
        .then((r) => {
          //登入成功
          if (r.success) {
            //把錯誤訊息清空
            setLoginError('')

            //先存至localStorage
            localStorage.setItem(
              'beebeeMemberAuth',
              JSON.stringify({
                authorized: true,
                token: r.token,
                memberId: r.memberId,
                memberEmail: r.memberEmail,
                memberName: r.memberName,
              })
            )

            //redux 存狀態

            dispatch(
              setLogin({
                memberId: r.memberId,
                memberEmail: r.memberEmail,
                memberName: r.memberName,
                token: r.token,
              })
            )

            //提示視窗開啟
            setModalOpen(true)

            //跳轉至首頁
            setTimeout(() => {
              navigation('/bee/home')
            }, 2000)
          } else {
            setLoginError(r.error)
          }
        })
        .catch((e) => console.log(e))
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
        background:
          'no-repeat  url("/public/images/home/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg")top left, 100% 100%',
        backgroundSize: 'cover',
        filter: 'contrast(80%)',
      }}
    >
      {!authorized && (
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
            variant="h5"
            align="center"
            color={theme.normal.wordGray}
            sx={{ mb: 2 }}
            onClick={() => {
              setUserInput({
                email: 'root666@gmail.com',
                password: 'Admin1234',
              })
            }}
          >
            登入
          </Typography>

          <Box
            noValidate
            autoComplete="off"
            component="form"
            sx={{ mb: 2 }}
            onKeyDown={(e) => {
              e.key === 'Enter' && handleSubmit(e)
            }}
          >
            <TextField
              id="email"
              autoComplete="off"
              label="帳號/email"
              required
              fullWidth
              placeholder="請輸入您的帳號/email"
              color="secondary"
              value={userInput.email}
              onChange={(e) =>
                handleUserInputChange(e.target.name, e.target.value)
              }
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
              }}
              variant="filled"
              error={loginError ? true : false}
            />
            <TextField
              id="password"
              placeholder="請輸入您的密碼"
              autoComplete="off"
              InputLabelProps={{ htmlFor: 'password' }}
              label="密碼"
              value={userInput.password}
              onChange={(e) =>
                handleUserInputChange(e.target.name, e.target.value)
              }
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
              error={loginError ? true : false}
              helperText={loginError}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: { md: 'flex-end' },
                flexWrap: { md: 'nowrap' },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth={!match}
                onClick={(e) => {
                  handleSubmit(e)
                }}
              >
                登入
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
              忘記密碼
            </Button>
            <Button variant="text" size="small">
              註冊帳號
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            {/**  NOTE: 實作第三方登入 */}
            <Typography variant="body1" color="secondary">
              使用其他方式登入
            </Typography>
            <Box>
              <IconButton>
                <GoogleIcon sx={{ fontSize: '30px', color: '#4285F4' }} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={{ fontSize: '30px', color: '#4267B2' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default LoginComponent
