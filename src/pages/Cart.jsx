import { useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import StepperBar from '../components/cart/StepperBar'
import CardItemCard from '../components/cart/CartItemCard'
import { useNavigate } from 'react-router-dom'
import NotLogin from '../components/cart/NotLogin'
import LoginNoItem from '../components/cart/LoginNoItem'
import DeleteInfoModal from '../components/productsPage/DeleteInfoModal'
import SummaryWrap from '../components/cart/SummaryWrap'

const CartItemCards = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: 16,
  margin: '0 auto',
  maxWidth: '600px',
  overflow: 'auto',
  '&>div': {
    flexShrink: 0,
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#223A66',
    borderRadius: '100px',
  },
  '&::-webkit-scrollbar': {
    width: '0.2rem',
  },
}))

const Cart = () => {
  const { memberId } = useSelector((state) => state.user.profile)
  const cartItem = useSelector((state) => state.cart.cartItem)

  // dispatch(fetchUserCart(memberId))
  // dispatch(addItemToCart(memberId, 102))
  // dispatch(addQuantity(memberId, 295, 1))
  // dispatch(minusQuantity(memberId, 295, 2))
  // dispatch(deleteItem(memberId, 293))
  // dispatch(emptyCart(memberId))

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: { xs: '0 auto 56px', sm: '0 auto' },
        padding: 2,
        paddingTop: 0,
      }}
    >
      <StepperBar />

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          mt: 4,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <CartItemCards
          sx={{
            maxHeight: { sm: '600px' },
            display: !memberId && 'flex',
            justifyContent: !memberId && 'center',
            alignItems: !memberId && 'center',
          }}
        >
          {/* 登入後 登入前 畫面 */}
          {memberId ? (
            cartItem.length === 0 ? (
              <LoginNoItem />
            ) : (
              memberId &&
              cartItem?.map((item) => (
                <div key={item.sid}>
                  <CardItemCard
                    key={item.sid}
                    product_pic={item.product_pic}
                    sid={item.sid}
                    quantity={item.quantity}
                    product_name={item.product_name}
                    product_price={item.product_price}
                  />
                  <DeleteInfoModal />
                </div>
              ))
            )
          ) : (
            <NotLogin />
          )}
        </CartItemCards>
        <SummaryWrap />
      </Box>
    </Box>
  )
}

export default Cart
