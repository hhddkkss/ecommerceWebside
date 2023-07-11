import { Box, List, ListItem } from '@mui/material'

const AlertMessage = () => {
  return (
    <Box
      sx={{
        alignSelf: 'stretch',
        width: '100%',
        background: '#677A9F',
        borderRadius: '20px',
      }}
    >
      <List>
        <ListItem>1. 檢查您的購物車，確保商品型號、數量和價格無誤。</ListItem>
        <ListItem>
          2.
          請閱讀並同意我們的購物政策和條款，以了解退換貨、退款和隱私保護等相關事項。
        </ListItem>
        <ListItem>
          3. 如果您有任何問題或需要協助，請隨時聯繫我們，我們將為您提供支援。
        </ListItem>
      </List>
    </Box>
  )
}

export default AlertMessage
