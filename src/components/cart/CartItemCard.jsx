import { Box, CardMedia, IconButton, Typography, Card } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { useDispatch, useSelector } from 'react-redux'
import {
  addQuantity,
  minusQuantity,
  setCartDeleteInfoModalOpen,
  setClickItem,
} from '../../redux/cartSlice'

const CartItemCard = (props) => {
  const dispatch = useDispatch()
  //點下刪除按鈕時 紀錄哪個商品點擊
  const { memberId: member_id } = useSelector((state) => state.user.profile)

  const {
    product_pic,
    sid,
    quantity,
    product_name,
    product_price,
  } = props

  const handleAddQuantity = (member_id, sid, quantity) => {
    dispatch(addQuantity(member_id, sid, quantity))
  }
  const handleMinusQuantity = (member_id, sid, quantity) => {
    dispatch(minusQuantity(member_id, sid, quantity))
  }

  const handleShowDeleteModal = (sid, product_name) => {
    dispatch(setCartDeleteInfoModalOpen(true))
    dispatch(setClickItem({ itemName: product_name, itemSid: sid }))
  }

  return (
    <>
      <Card
        sx={{
          borderRadius: '20px',
          p: 2,
          background: 'linear-gradient(175deg,#cfcfcf,#dfdfdf,#efefef)',
        }}
      >
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Box
            sx={{
              width: '100px',
              height: '100px',
              mr: 2,

              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <CardMedia
              component="img"
              src={`/images/${product_pic.split(',')[0]}`}
              sx={{ width: '100%', height: '100%' }}
            />
          </Box>

          <Typography
            variant="h6"
            fontFamily="jf-openhuninn"
            color="text.secondary"
          >
            {product_name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle" fontFamily="jf-openhuninn">
            {(+product_price).toLocaleString('zh-TW', {
              style: 'currency',
              currency: 'NTD',
              minimumFractionDigits: 0,
            })}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <IconButton
              size="small"
              sx={{ color: '#333' }}
              onClick={() => handleMinusQuantity(member_id, sid, quantity)}
              disabled={quantity === 1 && true}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6" fontFamily="jf-openhuninn">
              {quantity}
            </Typography>
            <IconButton
              size="small"
              sx={{ color: '#333' }}
              onClick={() => handleAddQuantity(member_id, sid, quantity)}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <Typography
            variant="subtitle"
            fontFamily="jf-openhuninn"
            color="error"
          >
            {(+quantity * product_price).toLocaleString('zh-TW', {
              style: 'currency',
              currency: 'NTD',
              minimumFractionDigits: 0,
            })}
          </Typography>

          <IconButton
            color="primary"
            variant="outlined"
            size="small"
            onClick={() => handleShowDeleteModal(sid, product_name)}
          >
            <DeleteRoundedIcon />
          </IconButton>
        </Box>
      </Card>
    </>
  )
}

export default CartItemCard
