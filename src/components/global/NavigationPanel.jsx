import { BottomNavigationAction, Badge, styled, Paper } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 2,
    top: 4,
    padding: '0 4px',
  },
}))

const NavigationPanel = ({ cartItemQuantity }) => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="首頁" icon={<HomeIcon />} />
        <BottomNavigationAction label="收藏" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="會員中心" icon={<PersonIcon />} />
        <BottomNavigationAction
          label="購物車"
          icon={
            <StyledBadge badgeContent={cartItemQuantity} color="orange">
              <ShoppingCartIcon fontSize="medium" />
            </StyledBadge>
          }
        />
      </BottomNavigation>
    </Paper>
  )
}

export default NavigationPanel
