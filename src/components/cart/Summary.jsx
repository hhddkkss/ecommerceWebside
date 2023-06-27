import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Button,
  List,
  ListItem,
  useTheme,
} from '@mui/material'

import DiscountIcon from '@mui/icons-material/Discount'
import { useSelector } from 'react-redux'

const Summary = () => {
  const totalPrice = useSelector((state) => state.cart.cartTotalPrice)

  const { memberId } = useSelector((state) => state.user.profile)

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
      <Card
        sx={{
          borderRadius: '20px',
          background: 'linear-gradient(90deg,#cfcfcf,#bfbfbf,#afafaf)',
          p: 4,
          display: 'flex',
          flexFlow: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ color: '#222' }}>
          結帳明細
        </Typography>
        <Box sx={{ borderBottom: '2px dotted #333' }}></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" color="secondary">
            小計
          </Typography>
          <Typography variant="body1">
            {memberId
              ? (+totalPrice).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })
              : (0).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" color="secondary">
            運費
          </Typography>
          <Typography variant="body1">
            {memberId
              ? (120).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })
              : (0).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pb: 2,
            borderBottom: '2px dotted #333 ',
          }}
        >
          <Typography variant="subtitle1" color="secondary">
            折扣
          </Typography>
          <Typography variant="body1" color="error">
            {memberId
              ? (120).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })
              : (0).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle1" color="secondary">
            總金額
          </Typography>
          <Typography variant="body1">
            {memberId
              ? (totalPrice + 120).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })
              : (0).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            sx={{ flexGrow: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DiscountIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              background: '#C38555',
              color: '#000',
              '&:hover': {
                background: '#C38111',
              },
            }}
          >
            兌換
          </Button>
        </Box>
      </Card>

      <Box
        sx={{
          alignSelf: 'stretch',
          width: '100%',
          background: '#677A9F',
          borderRadius: '20px',
        }}
      >
        <List>
          <ListItem>感謝您選擇我們BeE！</ListItem>
          <ListItem>
            1. 請仔細檢查您的購物車，確保商品型號、數量和價格無誤。
          </ListItem>
          <ListItem>
            2.
            在結帳前，請閱讀並同意我們的購物政策和條款，以了解退換貨、退款和隱私保護等相關事項。
          </ListItem>
          <ListItem>
            3.
            如果您有任何問題或需要協助，請隨時聯繫我們的客戶服務團隊，我們將樂意為您提供支援。
          </ListItem>
          <ListItem>
            謝謝您的支持！我們期待為您提供優質的購物體驗，並希望您滿意我們的產品和服務。祝您購物愉快！
          </ListItem>
        </List>
      </Box>
      <Button variant="contained" fullWidth sx={{ height: '50px' }}>
        我要結帳
      </Button>
    </Box>
  )
}

export default Summary
