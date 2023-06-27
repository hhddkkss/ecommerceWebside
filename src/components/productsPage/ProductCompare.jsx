import styled from '@emotion/styled'
import {
  Box,
  Stack,
  useTheme,
  Modal,
  Typography,
  IconButton,
  Button,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useState } from 'react'
import CompareContext from '../../context/CompareContext'
import { useContext } from 'react'
import {
  deleteFromCompareList,
  getCompareList,
  filterByCompareButton,
  addToComparing,
  getComparing,
  deleteFromComparing,
  fetchComparingDetails,
} from '../../utils/productsHelper'
import CompareDetail from './CompareDetail'
import UpgradeOutlinedIcon from '@mui/icons-material/UpgradeOutlined'

const buttonOption = ['手機', '平板', '耳機']

const MyButton = styled.button`
  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: fixed;
  height: 120px;
  max-width: 28px;
  bottom: 10%;
  right: 0;
  font-size: 16px;
  background-color: ${({ theme }) => theme.normal.deepBlue};
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #fff;
  z-index: 5;
  &:active {
    box-shadow: 0px 0px 0px 2px gray;
  }
`
const UpButton = styled(MyButton)`
  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  height: 35px;
  width: 35px;
  bottom: 30%;
  right: 0;
  border-radius: 50%;
  background-color: rgba(35, 58, 102, 0.8);
`

const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.normal.orange1};
`
const CompareCount = styled.span`
  color: #fff;
`

const ProductCompare = ({ sideBarExtend }) => {
  const theme = useTheme()
  //context
  const { myCompareList, setMyCompareList } = useContext(CompareContext)

  const [comparing, setComparing] = useState([])

  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [modalOpen, setModalOpen] = useState(false)

  //比較清單商品分類
  const [compareType, setCompareType] = useState('手機')
  const [displayCompareList, setDisplayCompareList] = useState([])

  //比較詳細頁開關
  const [detailOpen, setDetailOpen] = useState(false)

  const [comparingDetail, setComparingDetail] = useState([])

  function TypeChangeToNumber(txt) {
    if (txt === '手機') return 1
    if (txt === '平板') return 2
    if (txt === '耳機') return 3
  }

  const handleDetailOpen = () => {
    setDetailOpen(true)
  }
  const handleDetailClose = () => {
    setDetailOpen(false)
  }

  //開關比較列表Modal
  const handleOpen = () => {
    setModalOpen(true)
  }
  const handleClose = () => {
    setModalOpen(false)
  }
  //切換比較類別
  const handleChangeCompareType = (item) => {
    setCompareType(item)
  }

  //刪除待比較的項目
  const handleDeleteCompareItem = (itemPid) => {
    deleteFromCompareList(itemPid)
    //按下刪除按鈕時 連正在比較的商品也刪除
    deleteFromComparing(itemPid)
    const myComparing = getComparing()
    const myCompareList = getCompareList()
    setMyCompareList(myCompareList)
    setComparing(myComparing)
    fetchComparingDetails(
      JSON.stringify(myComparing),
      TypeChangeToNumber(compareType)
    )
      .then((res) => setComparingDetail(res))
      .catch((e) => console.log(e))
  }

  const handleAddToComparing = (itemPid) => {
    addToComparing(itemPid)
    const data = getComparing()
    setComparing(data)
    fetchComparingDetails(JSON.stringify(data), TypeChangeToNumber(compareType))
      .then((res) => setComparingDetail(res))
      .catch((e) => console.log(e))
  }

  const handleDeleteFromComparing = (itemPid) => {
    deleteFromComparing(itemPid)
    const data = getComparing()
    setComparing(data)
    fetchComparingDetails(JSON.stringify(data), TypeChangeToNumber(compareType))
      .then((res) => setComparingDetail(res))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    fetchComparingDetails(
      JSON.stringify(comparing),
      TypeChangeToNumber(compareType)
    )
      .then((res) => setComparingDetail(res))
      .catch((e) => console.log(e))
  }, [myCompareList])

  useEffect(() => {
    //當有刪除比較清單的商品和切換顯示的商品類型時，要重新做篩選
    const myData = filterByCompareButton(myCompareList, compareType)
    setDisplayCompareList(myData)
  }, [compareType, myCompareList])

  useEffect(() => {
    //當比較清單內的類別改變時 要把正在比較列表的清空
    localStorage.setItem('comparing', JSON.stringify([]))
    const data = getComparing()
    setComparing(data)
    fetchComparingDetails(JSON.stringify(data), TypeChangeToNumber(compareType))
      .then((res) => setComparingDetail(res))
      .catch((e) => console.log(e))
  }, [compareType])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: '#d7d7d7',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    ...(!matches && {
      top: 0,
      left: 0,
      transform: 'none',
      height: '100vh',
      width: '100vw',
      borderRadius: 0,
    }),
  }

  return (
    <>
      {!matches && (
        <UpButton onClick={() => window.scroll(0, 0)}>
          <UpgradeOutlinedIcon fontSize="large" />
        </UpButton>
      )}

      <MyButton
        theme={theme}
        onClick={handleOpen}
        sideBarExtend={sideBarExtend}
      >
        <Circle theme={theme}>
          <CompareCount>{myCompareList.length}</CompareCount>
        </Circle>
        比較列表
      </MyButton>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={style}>
          <IconButton
            sx={{ position: 'absolute', top: '0', right: '0' }}
            onClick={handleClose}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
          <Typography variant="h5" align="center" sx={{ my: 2 }}>
            挑選產品加入待比較清單
          </Typography>
          <Typography variant="body1" component="p" align="center">
            1.點擊 + 按鈕加入比較待比較清單
            <br />
            2.確認選取商品後，按下開始比較
          </Typography>
          <Typography sx={{ my: 2 }} color="error" align="center">
            最多只能選擇三樣產品來進行比較
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              mb: 2,
            }}
          >
            {buttonOption.map((item, i) => (
              <Button
                size="large"
                variant="contained"
                color={compareType === item ? 'orange' : 'primary'}
                onClick={() => handleChangeCompareType(item)}
                key={i}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Stack
            spacing={2}
            sx={{
              maxHeight: '300px',
              overflowY: 'scroll',
              mb: 2,
            }}
          >
            {displayCompareList.map((v) => (
              // flexShrink: 0  => 防止卡片因為flex而縮放
              <Card
                sx={{ display: 'flex', flexShrink: 0, position: 'relative' }}
                key={v.itemPid}
              >
                <Box sx={{ overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, objectFit: 'cover' }}
                    image={`/images/${v.ItemPic}`}
                    alt="Live from space album cover"
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="body1">
                      {v.itemName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      component="div"
                    >
                      {(+v.itemPrice).toLocaleString('zh-TW', {
                        style: 'currency',
                        currency: 'NTD',
                        minimumFractionDigits: 0,
                      })}
                      元
                    </Typography>
                  </CardContent>

                  <Box sx={{ display: 'flex' }}></Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                  }}
                >
                  {comparing.find((item) => item == v.itemPid) ? (
                    <IconButton
                      size="small"
                      color="orange"
                      sx={{ flexShrink: 0 }}
                      onClick={() => {
                        handleDeleteFromComparing(v.itemPid)
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      size="small"
                      color="primary"
                      sx={{ flexShrink: 0 }}
                      onClick={() => {
                        handleAddToComparing(v.itemPid)
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  )}

                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleDeleteCompareItem(v.itemPid)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Card>
            ))}
          </Stack>
          <CompareDetail
            handleDetailOpen={handleDetailOpen}
            handleDetailClose={handleDetailClose}
            detailOpen={detailOpen}
            compareType={compareType}
            comparingDetail={comparingDetail}
            handleDeleteFromComparing={handleDeleteFromComparing}
          />
        </Box>
      </Modal>
    </>
  )
}

export default ProductCompare
