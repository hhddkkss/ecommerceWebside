import styled from '@emotion/styled'

const ProductTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto 1rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  @media screen and (max-width: 576px) {
    justify-content: space-between;
  }
`

const ProductBox = styled.div`
  width: 20%;
  height: 180px;
  min-width: 150px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  letter-spacing: 0.2rem;
  transition: all 0.1s ease;

  &:active {
    box-shadow: 3px 3px 5px var(--wordGray);
    filter: drop-shadow(0 0 0.5rem var(--wordGray));
    
  }
  &:hover > img {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    flex-basis: 240px;
  }
  @media screen and (max-width: 576px) {
    flex-basis: 230px;
  }
`

const ProductTypeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in;
`

const Mask = styled.div`
  width: 100%;
  height: 180px;
  min-width: 150px;
  position: absolute;
  top: 0;
  color: #f5f5f5;
  text-shadow: 1px 1px 2rem #000;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in;
  user-select: none;
  cursor: pointer;
  font-family: var(--creamfont);
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  &:hover > p {
    transform: translate(0);
  }
`
const MaskText = styled.p`
  transform: translateY(-200px);
  transition: all 0.3s ease-in;
  user-select: none;
`

//產品分類
const productTypeOption = [
  {
    imgSrc: './images/class-all.jpg',
    imgAlt: 'all',
    title: 'All',
    product_category_id: 4,
  },
  {
    imgSrc: './images/class-phone.jpg',
    imgAlt: 'Cellphone',
    title: 'Cellphone',
    product_category_id: 1,
  },
  {
    imgSrc: './images/image 6.png',
    imgAlt: 'Tablet',
    title: 'Tablet',
    product_category_id: 2,
  },
  {
    imgSrc: './images/image7.png',
    imgAlt: 'Earphone',
    title: 'Earphone',
    product_category_id: 3,
  },
]

const ProductTypeButton = () => {
  return (
    <>
      <ProductTypeContainer>
        {productTypeOption.map((item) => {
          return (
            <ProductBox key={item.product_category_id}>
              <ProductTypeImg
                src={item.imgSrc}
                alt={item.imgAlt}
              ></ProductTypeImg>
              <Mask>
                <MaskText>{item.title}</MaskText>
              </Mask>
            </ProductBox>
          )
        })}
      </ProductTypeContainer>
    </>
  )
}

export default ProductTypeButton
