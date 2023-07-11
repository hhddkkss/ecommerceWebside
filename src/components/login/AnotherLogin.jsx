import { Box, Typography, IconButton } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'

const AnotherLogin = () => {
  return (
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
  )
}

export default AnotherLogin
