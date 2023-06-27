import { BottomNavigationAction, Badge, styled, Paper } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

import BottomNavigation from '@mui/material/BottomNavigation'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 2,
    top: 4,
    padding: '0 4px',
  },
}))

const NavigationPanel = () => {
  const navigation = useNavigate()
  const { authorized, memberId } = useSelector((state) => state.user.profile)
  const cartItem = useSelector((state) => state.cart.cartItem)

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="首頁"
          icon={<HomeIcon />}
          onClick={() => navigation('/bee/home')}
        />
        <BottomNavigationAction label="收藏" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label={memberId ? '會員中心' : '登入'}
          icon={
            authorized ? (
              // 導向會員資料頁面
              <PersonIcon />
            ) : (
              <PersonIcon onClick={() => navigation('/bee/login')} />
            )
          }
        />
        <BottomNavigationAction
          label="購物車"
          onClick={() => navigation('/bee/cart')}
          icon={
            <StyledBadge badgeContent={cartItem.length} color="orange">
              <ShoppingCartIcon fontSize="medium" />
            </StyledBadge>
          }
        />
      </BottomNavigation>
    </Paper>
  )
}

export default NavigationPanel
