import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check'
import BoltIcon from '@mui/icons-material/Bolt'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const msg = [
  {
    content: '方便',
    english: 'Convenient',
    icon: <CheckIcon sx={{ fontSize: '50px' }}></CheckIcon>,
  },
  {
    content: '快速',
    english: 'Fast',
    icon: <BoltIcon sx={{ fontSize: '50px' }}></BoltIcon>,
  },
  {
    content: '低價',
    english: 'Lower Price',
    icon: <LocalOfferIcon sx={{ fontSize: '50px' }}></LocalOfferIcon>,
  },
  {
    content: '質感',
    english: 'Texture',
    icon: <StarBorderIcon sx={{ fontSize: '50px' }}></StarBorderIcon>,
  },
]

const MiddleMsg = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.up('xs'))

  return (
    <Grid container sx={{ maxWidth: '1200px', margin: '0 auto 2rem' }}>
      {msg.map((item, i) => (
        <Grid item xs={3} key={item.english}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              borderRight: i !== msg.length - 1 ? '1px solid gray' : 'none',
            }}
          >
            {item.icon}
            <Typography variant="h4" sx={{ color: 'var(--deepBlue)' }}>
              {item.content}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.english}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default MiddleMsg
