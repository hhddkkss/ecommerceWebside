import { createContext, useState, useEffect } from 'react'

const CompareContext = createContext({})
export default CompareContext

const compareList = JSON.parse(localStorage.getItem('myCompareList')) || []

export const CompareContextProvider = function ({ children }) {
  const [myCompareList, setMyCompareList] = useState([...compareList])

  return (
    <CompareContext.Provider value={{ myCompareList, setMyCompareList }}>
      {children}
    </CompareContext.Provider>
  )
}
