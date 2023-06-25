import { Modal, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: 150,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
}

const TextStyle = {
  mb: 2,
}

const LoginModal = ({ modalOpen }) => {
  const { memberName } = useSelector((state) => state.user.profile)

  return (
    <Modal sx={ModalStyle} open={modalOpen}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItem: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" align="center" sx={TextStyle}>
          登入成功！！
        </Typography>
        <Typography variant="body" align="center" sx={TextStyle}>
          {memberName}
        </Typography>
        <Typography variant="body1" align="center" sx={TextStyle}>
          稍後為您跳轉至首頁
        </Typography>
      </Box>
    </Modal>
  )
}

export default LoginModal
