import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      //加上NavigationPanel的距離
      sx={{ padding: 2, backgorund: '#F4F4F4', paddingBottom: { xs: '56px' } }}
    >
      <Typography variant="body1">
        星期一至星期五(正常上班日) :AM 8:30 至 PM 20:00
      </Typography>
      <Typography variant="body1">
        非服務時間請在語音留言或官網登記，我們將於服務時間盡速與您聯繫其它服務時間如有異動請詳見官網公告,
        謝謝。
      </Typography>
      <Typography variant="body1">售後服務專線 : 0800-777-666</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        (行動電話請改撥 (02) 2567-3456)
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        版權所有©2009-2023 BEEbeE
      </Typography>
    </Box>
  )
}

export default Footer
