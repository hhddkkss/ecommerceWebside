import {
    Fade,
    Modal,
    Box,
    Typography,
    Backdrop,
    IconButton,
    Button,
  } from '@mui/material'
  import { useDispatch, useSelector } from 'react-redux'
  import { useNavigate } from 'react-router-dom'
  import { setCartInfoModalClose } from '../../redux/cartSlice'
  import CloseIcon from '@mui/icons-material/Close'
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 250, sm: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  
  const closeStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
  }
  
  const InfoModal = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const modalOpen = useSelector((state) => state.cart.cartInfoModal)
  
    const handleClose = () => {
      dispatch(setCartInfoModalClose(false))
    }
  
    const handleToLogin = () => {
      dispatch(setCartInfoModalClose(false))
      navigation('/bee/login')
    }
  
    return (
      <Modal
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <IconButton style={closeStyle} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h4"
              align="center"
            >
              尚未登入
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h4"
              align="center"
            >
              請登入後再執行操作
            </Typography>
            <Button
              sx={{ mt: 4, width: '100%', textAlign: 'center' }}
              variant="text"
              onClick={handleToLogin}
            >
              點我進行登入
            </Button>
          </Box>
        </Fade>
      </Modal>
    )
  }
  
  export default InfoModal
  