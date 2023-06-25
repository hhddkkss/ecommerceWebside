import styled from '@emotion/styled'
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone'

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

const ProductTypeOption = ['全部商品', '手機', '平板', '耳機']

const sortOption = [
  '上架時間:最新',
  '上架時間:最舊',
  '價格:由高到低',
  '價格:由低至高',
]

const SideBarButton = styled.button`
  position: fixed;
  left: ${({ sideBarExtend }) => (sideBarExtend ? '-250px' : '0')};
  border: none;
  width: 32px;
  height: 80px;
  transition: left 0.3s ease-in;
  color: var(--deepBlue);
  font-size: 16px;
  padding: 2px;
  z-index: 10;
  @media screen and (max-width: 600px) {
    height: 80px;
  }
`

const Container = styled.div`
  position: fixed;
  left: ${({ sideBarExtend }) => (sideBarExtend ? '0' : '-250px')};
  height: 100vh;
  top: 0;
  background-color: #f8f8f8;
  min-width: 250px;
  z-index: 10;
  transition: left 0.3s ease-in;
  padding-top: 5rem;
`

const List = styled.ul`
  background: #f8f8f8;
  list-style: none;
  padding: 1rem 0 0;
`

const ListTitle = styled.li`
  color: #020202;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 1rem;
  padding-left: 1rem;
`

const ListItem = styled.li`
  color: #3f3f3f;
  font-size: 14px;
  user-select: none;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8;
  &:hover {
    color: #070707;
    background-color: #ededed;
  }
  &:active {
    color: #999;
    transform: translateX(1px) translateY(1px);
  }
`

const ListItemActive = styled.li`
  color: #000;
  font-size: 14px;
  user-select: none;
  letter-spacing: 2px;
  font-weight: 900;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8;
  &:hover {
    color: #070707;
    background-color: #ededed;
  }
  &:active {
    color: #999;
    transform: translateX(1px) translateY(1px);
  }
`

const SideBar = ({
  sortType,
  setSortType,
  sideBarExtend,
  setSideBarExtend,
  setBrand,
  setProductType,
}) => {
  const handleClick = (sortType) => {
    setSortType(sortType)
  }

  const toggleSideBar = () => {
    setSideBarExtend(!sideBarExtend)
  }

  const handleProductTypeChange = (productType) => {
    setProductType(productType)
  }

  const handleBrandChange = (brand) => {
    setBrand(brand)
  }

  return (
    <>
      <Container sideBarExtend={sideBarExtend} className="sidebar-content">
        <List>
          <ListTitle>商品排序 -</ListTitle>
          {sortOption.map((item, index) => {
            return sortType === item ? (
              <ListItemActive key={index}>{item}</ListItemActive>
            ) : (
              <ListItem key={index} onClick={() => handleClick(item)}>
                {item}
              </ListItem>
            )
          })}
        </List>

        <List>
          <ListTitle>商品類別 -</ListTitle>
          {ProductTypeOption.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleProductTypeChange(index)}
            >
              {item}
            </ListItem>
          ))}
        </List>

        <List>
          <ListTitle>品牌類別 -</ListTitle>
          {brandOption.map((item, index) => (
            <ListItem key={index} onClick={() => handleBrandChange(item)}>
              {item}
            </ListItem>
          ))}
        </List>
      </Container>

      <SideBarButton onClick={toggleSideBar} sideBarExtend={sideBarExtend}>
        選單
        <KeyboardDoubleArrowRightTwoToneIcon />
      </SideBarButton>
    </>
  )
}

export default SideBar
