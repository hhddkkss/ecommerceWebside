import styled from '@emotion/styled'

//品牌分類
const brandOption = [
  '全部品牌',
  'Apple',
  'Samsung',
  'Asus',
  'Oppo',
  '小米',
  'Sony',
  'Realme',
  '其他品牌',
]
const BrandContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
`

const BrandArea = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: var(--deepBlue);
  padding: 1rem 0.5rem;
  height: 100%;
  box-shadow: 1px 1px 2px var(--deepBlue);
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const BrandItem = styled.li`
  color: #e2e2e2;
  text-decoration: none;
  transition: all 0.1s ease-in;
  text-align: center;
  cursor: pointer;
  margin: 0;
  font-size: 18px;
  user-select: none;
  letter-spacing: 2px;
  min-width: 80px;
  &:hover {
    color: #bbb;
  }
  &:active {
    color: #999;
    transform: translateX(1px) translateY(1px);
  }
  @media screen and (max-width: 576px) {
    flex-basis: 80px;
  }
`

const BrandButton = () => {
  return (
    <>
      <BrandContainer>
        <BrandArea>
          {brandOption.map((item, i) => {
            return <BrandItem key={i}>{item}</BrandItem>
          })}
        </BrandArea>
      </BrandContainer>
    </>
  )
}

export default BrandButton
