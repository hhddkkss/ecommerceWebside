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
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import { useState } from 'react'

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

function NavBar() {
  const theme = useTheme()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const { memberAuth, Logout } = useContext(AuthContext)

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
    Logout()
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

          <Box>
            <IconButton
              sx={{
                p: 0,
                color: '#fff',
              }}
            >
              <StyledBadge badgeContent={4} color="orange">
                <ShoppingCartIcon fontSize="medium" />
              </StyledBadge>
            </IconButton>
            {memberAuth.authorized ? (
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
                  <MenuItem sx={{ fontSize: '16px' }}>
                    {memberAuth.memberName}
                  </MenuItem>
                  <MenuItem onClick={handleUserLogout}>登出</MenuItem>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
