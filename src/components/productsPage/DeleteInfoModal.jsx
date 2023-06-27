import {
  Fade,
  Modal,
  Box,
  Typography,
  IconButton,
  Backdrop,
  Button,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setCartDeleteInfoModalClose } from '../../redux/cartSlice'
import CloseIcon from '@mui/icons-material/Close'
import { deleteItem } from '../../redux/cartSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
}

const closeStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
}

const DeleteInfoModal = () => {
  const dispatch = useDispatch()
  const modalOpen = useSelector((state) => state.cart.deleteInfoModal)
  const { memberId } = useSelector((state) => state.user.profile)
  const { itemName, itemSid } = useSelector((state) => state.cart.clickItem)

  const handleCancel = () => {
    dispatch(setCartDeleteInfoModalClose(false))
  }
  const handleConfirm = () => {
    dispatch(setCartDeleteInfoModalClose(false))
    dispatch(deleteItem(memberId, itemSid))
  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleCancel}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          timeout: 300,
        },
      }}
    >
      <Fade in={modalOpen}>
        <Box sx={style}>
          <IconButton style={closeStyle} onClick={handleCancel}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" component="h4" align="center">
            {`確定要${itemName}刪除嗎？`}
          </Typography>

          <Box
            sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}
          >
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              確定
            </Button>
            <Button variant="contained" color="error" onClick={handleCancel}>
              取消
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default DeleteInfoModal
