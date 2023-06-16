import { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const UserInput = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`

const SearchKeyword = styled.input`
  /* width: 190px; */
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
  width: 110px;
  text-align: right;
  border-radius: 20px;
  border: none;
  padding: 0.5rem;
  color: var(--wordGray);
  background-color: transparent;
  border: 1px solid var(--deepBlue);
  margin-left: -10%;
  &:hover {
    background-color: var(--deepBlue);
    color: white;
  }
  & > svg {
    margin-left: 10px;
  }
`

const FunctionalBar = ({ setKeyWord, sideBarExtend }) => {
  const [userInput, setUserInput] = useState('')

  const handleChangeInput = (e) => {
    const { value } = e.target
    setUserInput(value)
  }

  const handleSearchButton = () => {
    setKeyWord(userInput)
  }

  return (
    <Container sideBarExtend={sideBarExtend}>
      <UserInput>
        <SearchKeyword
          placeholder="輸入要尋找的商品"
          value={userInput}
          onChange={(e) => handleChangeInput(e)}
          onKeyUp={(e) => e.key === 'Enter' && handleSearchButton()}
        ></SearchKeyword>
        <SearchButton onClick={handleSearchButton}>
          搜尋
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </UserInput>
    </Container>
  )
}

export default FunctionalBar
