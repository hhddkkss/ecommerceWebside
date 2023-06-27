import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LoginNoItem = () => {
  const navigate = useNavigate()

  return (
    <>
      <Typography variant="h3" align="center" color="secondary">
        購物車內
      </Typography>
      <Typography variant="h3" align="center" color="secondary">
        目前沒有商品！
      </Typography>
      <Button
        variant="text"
        size="large"
        sx={{
          margin: '0 auto',
          width: 'fit-content',
          fontSize: '30px',
        }}
        onClick={() => navigate('/bee/product')}
      >
        點我去挑選~
      </Button>
    </>
  )
}

export default LoginNoItem
