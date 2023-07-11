import {
  Box,
  Card,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from '@mui/material'
import DiscountIcon from '@mui/icons-material/Discount'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import AlertMessage from './AlertMessage'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { setCouponInfo, clearCouponInfo } from '../../redux/couponSlice'

const Summary = () => {
  const dispatch = useDispatch()

  const totalPrice = useSelector((state) => state.cart.cartTotalPrice)
  const couponInfo = useSelector((state) => state.coupon.couponInfo)

  const { hasCoupon, couponPrice, couponName } = couponInfo

  const [couponInput, setCouponInput] = useState('')

  const initError = { isError: false, errorMsg: '' }

  const [couponError, setCouponError] = useState(initError)

  const handleInputChange = (e) => {
    setCouponInput(e.target.value)
  }

  const handleCancelCoupon = () => {
    dispatch(clearCouponInfo())
    setCouponInput('')
    setCouponError(initError)
  }

  const handleCheckout = async () => {
    const res = await axios.get(`http://192.168.1.104:3003/coupon/${couponInput}`)

    //檢查輸入的優惠碼有沒有錯誤
    if (res.data === 'error') {
      setCouponError((prev) => ({
        ...prev,
        isError: true,
        errorMsg: '沒有此優惠券 請重新輸入!!',
      }))
      return
    }

    //沒有錯誤的話 檢查是否過期
    if (res.data !== 'error') {
      const { discount, coupon_name, end_time } = res.data

      const endTime = dayjs(end_time).format('YYYYMMDD hhmmss')
      const time = dayjs(new Date()).format('YYYYMMDD hhmmss')

      if (!dayjs(endTime).isAfter(time)) {
        setCouponError((prev) => ({
          ...prev,
          isError: true,
          errorMsg: '此優惠券已過期 請重新輸入!!',
        }))
        return
      }

      dispatch(
        setCouponInfo({
          hasCoupon: true,
          couponName: coupon_name,
          couponPrice: discount,
        })
      )
      setCouponError(initError)
    }
  }

  const { memberId } = useSelector((state) => state.user.profile)

  return (
    <>
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
        {hasCoupon && (
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
            <Typography variant="subtitle1" color="secondary">
              {couponName}
            </Typography>
            <Typography variant="body1" color="error">
              {'-' +
                (+couponPrice).toLocaleString('zh-TW', {
                  style: 'currency',
                  currency: 'NTD',
                  minimumFractionDigits: 0,
                })}
            </Typography>
          </Box>
        )}
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
              ? (totalPrice + 120 - couponPrice || 0).toLocaleString('zh-TW', {
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
            size="small"
            sx={{ flexGrow: 2 }}
            value={couponInput}
            onChange={handleInputChange}
            color="primary"
            onKeyDown={(e) => {
              e.key === 'Enter' && handleCheckout()
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DiscountIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton onClick={handleCancelCoupon}>
                  <HighlightOffIcon />
                </IconButton>
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
            onClick={handleCheckout}
          >
            兌換
          </Button>
        </Box>
        {couponError.errorMsg && (
          <Typography variant="caption" color="error">
            {couponError.errorMsg}
          </Typography>
        )}
      </Card>
    </>
  )
}

export default Summary
