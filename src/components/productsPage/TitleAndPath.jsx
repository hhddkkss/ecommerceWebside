import styled from '@emotion/styled'

const Container = styled.div`
  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  max-width: 1200px;
  margin: 0 auto 1rem;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--wordGray);
  overflow: hidden;
  transition: 0.3s ease-in;
`

const Text = styled.p`
  font-size: 30px;
`

const Slogan = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`

const Logo = styled.span`
  color: var(--deepBlue);
  font-weight: 700;
`

const Path = styled.ul`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const PathItem = styled.li`
  color: var(--deepBlue);
  &:nth-of-type(1)::after,
  &:nth-of-type(2)::after {
    content: '>';
    margin-left: 1rem;
  }
`

function productTypeNumToWord(productType) {
  switch (productType) {
    case 0:
      return '全部商品'
    case 1:
      return '手機'
    case 2:
      return '平板'
    case 3:
      return '耳機'
  }
}

const TitleAndPath = ({ sideBarExtend, brand, productType }) => {
  return (
    <Container sideBarExtend={sideBarExtend}>
      <Title>
        <Text>比比精選</Text>
      </Title>
      <Slogan>
        We always <Logo>beE.</Logo> side you.
      </Slogan>
      <Path>
        <PathItem>目前產品分類</PathItem>
        <PathItem>{productTypeNumToWord(productType)}</PathItem>
        <PathItem>{brand}</PathItem>
      </Path>
    </Container>
  )
}

export default TitleAndPath
