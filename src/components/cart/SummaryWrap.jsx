import { Box, Button } from '@mui/material'
import Summary from './Summary'
import AlertMessage from './AlertMessage'

const SummaryWrap = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        maxWidth: '600px',
        flexBasis: { md: '400px', xs: '100%' },
        width: { xs: '100%' },
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Summary />
      <AlertMessage />
      <Button variant="contained" fullWidth sx={{ height: '50px' }}>
        我要結帳
      </Button>
    </Box>
  )
}

export default SummaryWrap
