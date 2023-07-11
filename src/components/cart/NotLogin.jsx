import { Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotLogin = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Typography variant="h3" align="center" color="secondary">
        請先登入後再
      </Typography>
      <Typography variant="h3" align="center" color="secondary">
        進行購物車操作
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="text"
          size="large"
          sx={{
            margin: '0 auto',
            width: 'fit-content',
            fontSize: '30px',
          }}
          onClick={() => navigate('/bee/login')}
        >
          點我去登入~
        </Button>
      </Box>
    </Box>
  )
}

export default NotLogin
