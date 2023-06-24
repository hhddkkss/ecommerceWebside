import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link as LinkComponent, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import PersonIcon from '@mui/icons-material/Person'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../../redux/userSlice'

const pages = ['比比精選', '比比論壇', '比比會員', '比比活動']

const path = {
  比比精選: '/bee/product',
  比比論壇: '/bee/article',
  比比會員: '/bee/member',
  比比活動: '/bee/activities',
}
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    padding: '0 4px',
  },
}))

const Link = styled(LinkComponent)`
  text-decoration: none;
  color: #000;
`

function NavBar({ cartItemQuantity }) {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.user.profile)
  const { authorized, memberName } = profile

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const [anchorLogout, setAnchorLogout] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenLogout = (event) => {
    setAnchorLogout(event.currentTarget)
  }
  const handleCloseLogout = () => {
    setAnchorLogout(null)
  }

  const handleUserLogout = () => {
    setAnchorLogout(null)
    localStorage.removeItem('beebeeMemberAuth')
    dispatch(setLogout())
  }

  const navigation = useNavigate()

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'var(--deepBlue)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigation('/bee/home')}
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            BEEBeE<span style={{ color: '#000' }}>.</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              // 控制Menu出現的位置
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu} key={page}>
                  <Typography textAlign="center">
                    <Link to={path[page]}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/bee/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BEEBeE<span style={{ color: '#000' }}>.</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={path[page]} key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  color="white"
                  sx={{ mr: 5, my: 2, display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {match && (
            <Box>
              <IconButton
                sx={{
                  p: 0,
                  color: '#fff',
                }}
              >
                <StyledBadge badgeContent={cartItemQuantity} color="orange">
                  <ShoppingCartIcon fontSize="medium" />
                </StyledBadge>
              </IconButton>
              {authorized ? (
                <>
                  <IconButton
                    sx={{ color: '#fff', marginLeft: 3 }}
                    onClick={handleOpenLogout}
                  >
                    <PersonIcon fontSize="medium"></PersonIcon>
                  </IconButton>
                  <Menu
                    open={Boolean(anchorLogout)}
                    onClose={handleCloseLogout}
                    anchorEl={anchorLogout}
                    // 控制Menu出現的位置
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    sx={{ width: '200px', ml: -2 }}
                  >
                    <MenuItem>
                      <Typography fontFamily={'jf-openhuninn'}>
                        {memberName}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleUserLogout}>
                      <Typography fontFamily={'jf-openhuninn'}>登出</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <IconButton
                  sx={{ color: '#fff', marginLeft: 3 }}
                  onClick={() => {
                    navigation('/bee/login')
                  }}
                >
                  <PersonIcon fontSize="medium"></PersonIcon>
                </IconButton>
              )}
            </Box>
          )}

          {!match && authorized && (
            <Link style={{ color: '#fff' }} onClick={handleUserLogout}>
              登出
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
