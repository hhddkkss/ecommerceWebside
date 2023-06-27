import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const Container = styled.div`
  font-family: var(--creamfont);
  display: flex;
`

const Title = styled.h2`
  color: var(--deepBlue);
  margin-bottom: 4rem;
  font-weight: 600;
  font-size: 40px;
  &::first-letter {
    font-size: 100px;
  }
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
  }
`

const Slogan = styled.p`
  font-size: 30px;
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
  }
`

const Introduce = () => {
  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        margin: '0rem auto 2rem',
        background:
          'linear-gradient(105deg,#fdf5e6 30% , transparent 50%) center center / 100% 100%,url("/images/Home/susan-wilkinson-oscknq59n2o-unsplash.jpg") right center / 100% 100% ',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: ' 3rem ',
            flexBasis: '100%',
          }}
        >
          <Title>Bee a Choice!</Title>
          <Slogan>科技生活，</Slogan>
          <Slogan style={{ color: '#666' }}>科技選物。</Slogan>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              ' @media screen and (max-width: 1000px)': {
                paddingLeft: 2,
              },
            }}
          >
            我們在乎每一位客人，
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ' @media screen and (max-width: 1000px)': {
                paddingLeft: 2,
              },
            }}
          >
            在乎每一個想法，
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ' @media screen and (max-width: 1000px)': {
                paddingLeft: 2,
              },
            }}
          >
            我們只想給您最好的，
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              ' @media screen and (max-width: 1000px)': {
                paddingLeft: 2,
              },
            }}
          >
            相信您的選擇，
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ' @media screen and (max-width: 1000px)': {
                paddingLeft: 2,
              },
            }}
          >
            最好的都在BEEbeE。
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Introduce
