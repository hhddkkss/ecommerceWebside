import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check'
import BoltIcon from '@mui/icons-material/Bolt'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const IconStyle = {
  fontSize: '50px',
}

const msg = [
  {
    content: '方便',
    english: 'Convenient',
    icon: <CheckIcon sx={{ ...IconStyle }} />,
  },
  {
    content: '快速',
    english: 'Fast',
    icon: <BoltIcon sx={{ ...IconStyle }} />,
  },
  {
    content: '低價',
    english: 'Lower Price',
    icon: <LocalOfferIcon sx={{ ...IconStyle }} />,
  },
  {
    content: '質感',
    english: 'Texture',
    icon: <StarBorderIcon sx={{ ...IconStyle }} />,
  },
]

const MiddleMsg = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))

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
              gap: '0.6rem',
              borderRight: i !== msg.length - 1 ? '1px solid gray' : 'none',
            }}
          >
            {item.icon}
            <Typography
              variant={!isSm ? 'h5' : 'h4'}
              sx={{ color: 'var(--deepBlue)' }}
            >
              {item.content}
            </Typography>
            <Typography
              variant={!isSm ? 'caption' : 'body1'}
              color="text.secondary"
              align="center"
            >
              {item.english}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default MiddleMsg
