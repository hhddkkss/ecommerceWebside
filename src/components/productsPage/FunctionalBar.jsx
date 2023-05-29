import { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faArrowsUpDown,
} from '@fortawesome/free-solid-svg-icons'

const sortOption = ['上架時間:最新', '價格:由高到低', '價格:由低至高']

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const UserInput = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
  }
`

const SearchKeyword = styled.input`
  width: 190px;
  border-radius: 20px;
  padding: 0.7rem;
  border: none;
  position: relative;
  z-index: 1;
  background-color: var(--wordGray);
  color: #fff;
  &:focus-visible {
    outline: 0.5px solid var(--deepBlue);
  }
  &::placeholder {
    color: #fff;
  }
`

const SearchButton = styled.button`
  width: 130px;
  text-align: right;
  border-radius: 20px;
  border: none;
  padding: 0.5rem;
  color: var(--wordGray);
  background-color: transparent;
  border: 1px solid var(--deepBlue);
  transform: translate(-30%);
  &:hover {
    background-color: var(--deepBlue);
    color: white;
  }
  & > svg {
    margin-left: 10px;
  }
`

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`
const Sort = styled.span`
  font-weight: 700;
  margin-right: 1rem;
  color: var(--wordGray);
`

const SortItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--wordGray);
`

// active 樣式
const SortItemActive = styled(SortItem)`
  color: var(--deepBlue);
  font-weight: 700;
`

const FunctionalBar = () => {
  const [sortType, setSortType] = useState('上架時間:最新')
  return (
    <Container>
      <UserInput>
        <SearchKeyword></SearchKeyword>
        <SearchButton>
          搜尋
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </UserInput>
      <Wrap>
        <Sort>
          排序
          <FontAwesomeIcon icon={faArrowsUpDown} />
        </Sort>
        {sortOption.map((v, i) => {
          return sortType === v ? (
            <SortItemActive key={i}>{v}</SortItemActive>
          ) : (
            <SortItem key={i} onClick={() => setSortType(v)}>
              {v}
            </SortItem>
          )
        })}
      </Wrap>
    </Container>
  )
}

export default FunctionalBar
