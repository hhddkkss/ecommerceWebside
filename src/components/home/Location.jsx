import GoogleMap from './GoogleMap'
import { Box, Typography } from '@mui/material'

const Location = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="text.secondary"
        textAlign="center"
        sx={{ fontFamily: 'var(--jfopenhuninn)', mb: 4 }}
      >
        BEEbeE在哪裡?
      </Typography>
      <GoogleMap></GoogleMap>
      <Box
        sx={{
          background:
            'linear-gradient(35deg,rgba(58,58,58,0.7) ,rgba(192,192,192,.9))  center center',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, pl: 5, color: '#fff' }}>
          五家分店讓你輕鬆找!!
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, pl: 5, color: '#f2f2f2' }}>
          探索我們的3C選貨商店，專營手機、平板電腦和耳機等熱門商品。我們引以為傲的不僅僅是優質的產品，還有方便的店面位置和交通環境。藉由我們的五家分店，我們將您的購物體驗提升到全新水平。
        </Typography>
        <Typography variant="h6" sx={{ pl: 5, color: '#f2f2f2' }}>
          無論您身在何處，我們的分店總能輕鬆到達。位於交通要道的點，我們的商店靠近主要公共交通站點和主要道路，提供您快捷便利的前往方式。無論您是乘坐公車、開車或步行，都能輕易找到我們的分店。
        </Typography>
      </Box>
    </Box>
  )
}

export default Location
