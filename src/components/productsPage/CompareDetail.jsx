import {
  Box,
  Button,
  Modal,
  useMediaQuery,
  useTheme,
  IconButton,
  Stack,
  Typography,
  Card,
  CardMedia,
} from '@mui/material'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import RemoveIcon from '@mui/icons-material/Remove'

const phoneTitle = ['作業系統', '處理器', '記憶體', '電池', '螢幕尺寸']
const tabletTitle = [
  '作業系統',
  '處理器',
  '記憶體',
  '電池',
  '螢幕尺寸',
  '前置鏡頭畫素',
  '後置鏡頭畫素',
  '螢幕解析度',
]
const headPhoneTitle = [
  '通透模式',
  '主動降噪',
  '通話智能降噪',
  '電持續航力',
  '遊戲低延遲',
  '無線充電',
  '防水係數',
]

const CompareDetail = ({
  handleDetailOpen,
  handleDetailClose,
  detailOpen,
  comparingDetail,
  compareType,
  handleDeleteFromComparing,
}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '60%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#d7d7d7',
    boxShadow: 24,
    p: { xs: 0, sm: 4 },
    borderRadius: '5px',
    height: '800px',
    display: 'flex',
    justifyContent: 'center',
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
    <ScrollSync>
      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleDetailOpen}
          >
            開始比較
          </Button>
        </Box>

        <Modal open={detailOpen} onClose={handleDetailClose}>
          <Box
            sx={{
              ...style,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                borderRadius: { xs: 0, sm: 2 },
                background: theme.normal.deepBlue,
              }}
            >
              <IconButton
                onClick={handleDetailClose}
                sx={{
                  width: '50px',
                  height: '50px',
                  color: theme.normal.textColorWhite,
                }}
              >
                <CloseIcon />
              </IconButton>

              {compareType === '手機' && (
                <ScrollSyncPane>
                  <Stack
                    sx={{
                      // height: '300px',
                      overflow: 'auto',
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      '&::-webkit-scrollbar': {
                        width: '0.5rem',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: '#050505',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ddd',
                        borderRadius: '10px',
                      },
                    }}
                  >
                    {phoneTitle.map((v, i) => (
                      <Typography
                        variant="subtitle2"
                        key={i}
                        sx={{
                          bgcolor:
                            i % 2 === 0
                              ? theme.normal.wordGray
                              : theme.normal.deepBlue,
                          color: theme.normal.textColorWhite,
                          fontWeight: 300,
                          py: 2,
                          minWidth: '140px',
                        }}
                        align="center"
                      >
                        {v}
                      </Typography>
                    ))}
                  </Stack>
                </ScrollSyncPane>
              )}

              {compareType === '平板' && (
                <ScrollSyncPane>
                  <Stack
                    sx={{
                      height: '300px',
                      overflow: 'auto',
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      '&::-webkit-scrollbar': {
                        width: '0.5rem',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: '#050505',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ddd',
                        borderRadius: '10px',
                      },
                    }}
                  >
                    {tabletTitle.map((v, i) => (
                      <Typography
                        variant="subtitle2"
                        key={i}
                        sx={{
                          bgcolor:
                            i % 2 === 0
                              ? theme.normal.wordGray
                              : theme.normal.deepBlue,
                          color: theme.normal.textColorWhite,
                          fontWeight: 300,
                          py: 2,
                          minWidth: '100px',
                        }}
                        align="center"
                      >
                        {v}
                      </Typography>
                    ))}
                  </Stack>
                </ScrollSyncPane>
              )}

              {compareType === '耳機' && (
                <ScrollSyncPane>
                  <Stack
                    sx={{
                      height: '300px',
                      overflow: 'auto',
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      '&::-webkit-scrollbar': {
                        width: '0.5rem',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: '#050505',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ddd',
                        borderRadius: '10px',
                      },
                    }}
                  >
                    {headPhoneTitle.map((v, i) => (
                      <Typography
                        variant="subtitle2"
                        key={i}
                        sx={{
                          bgcolor:
                            i % 2 === 0
                              ? theme.normal.wordGray
                              : theme.normal.deepBlue,
                          color: theme.normal.textColorWhite,
                          fontWeight: 300,
                          py: 2,
                          minWidth: '140px',
                        }}
                        align="center"
                      >
                        {v}
                      </Typography>
                    ))}
                  </Stack>
                </ScrollSyncPane>
              )}
            </Box>

            <Box
              sx={{
                display: 'flex',
                overflowX: 'auto',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {comparingDetail.map((v, i) => (
                <Card
                  key={v.product_id}
                  sx={{
                    width: '250px',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-between',
                    pt: 2,
                    borderBottomLeftRadius: { xs: 0, sm: 4 },
                    position: 'relative',
                  }}
                >
                  <IconButton
                    sx={{
                      width: '50px',
                      height: '50px',
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}
                    onClick={() => handleDeleteFromComparing(v.product_id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <CardMedia
                        src={'/images/' + v.product_pic.split(',')[0]}
                        component="img"
                        title={v.product_name}
                        sx={{
                          width: { xs: '100px', md: '200px' },
                          height: { xs: '100px', md: '200px' },
                          objectFit: 'cover',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="subtitle2"
                      align="center"
                      sx={{ mb: 4, minHeight: '120px', p: 2 }}
                    >
                      {v.product_name}
                    </Typography>
                    <Typography variant="body1" align="center">
                      {(+v.product_price).toLocaleString('zh-TW', {
                        style: 'currency',
                        currency: 'NTD',
                        minimumFractionDigits: 0,
                      }) + '元'}
                    </Typography>
                  </Box>

                  {compareType === '手機' && (
                    <ScrollSyncPane>
                      <Stack
                        sx={{
                          // height: '300px',
                          overflow: 'auto',
                          '&::-webkit-scrollbar': {
                            display: 'none',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            //   backgroundColor: '#ddd',
                            //   borderRadius: '10px',
                            display: 'none',
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.operation_system}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.prcessor}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.ROM}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.battery}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.screen_size}
                        </Typography>
                      </Stack>
                    </ScrollSyncPane>
                  )}
                  {compareType === '平板' && (
                    <ScrollSyncPane>
                      <Stack
                        sx={{
                          height: '300px',
                          overflow: 'auto',
                          flexGrow: '0',
                          '&::-webkit-scrollbar': {
                            display: 'none',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            //   backgroundColor: '#ddd',
                            //   borderRadius: '10px',
                            display: 'none',
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.operation_system}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.processor}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.ram_rom}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.battery}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.screen_size}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.cam_front || '無'}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.cam_back}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.resolution}
                        </Typography>
                      </Stack>
                    </ScrollSyncPane>
                  )}
                  {compareType === '耳機' && (
                    <ScrollSyncPane>
                      <Stack
                        sx={{
                          height: '300px',
                          overflow: 'auto',
                          flexGrow: '0',
                          '&::-webkit-scrollbar': {
                            display: 'none',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            //   backgroundColor: '#ddd',
                            //   borderRadius: '10px',
                            display: 'none',
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.transparen_mode == 0 ? '無' : '有'}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            py: 2,
                          }}
                          align="center"
                        >
                          {v.ANC == 0 ? '無' : '有'}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.CVC}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.power_usage_time}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.low_latency == 1 ? '有' : '無'}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.deepBlue,
                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.Qi == 1 ? '有' : '無'}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            bgcolor: theme.normal.wordGray,

                            color: theme.normal.textColorWhite,
                            fontWeight: 300,
                            padding: 2,
                          }}
                          align="center"
                        >
                          {v.IP_ratings}
                        </Typography>
                      </Stack>
                    </ScrollSyncPane>
                  )}
                </Card>
              ))}
            </Box>
          </Box>
        </Modal>
      </>
    </ScrollSync>
  )
}

export default CompareDetail
