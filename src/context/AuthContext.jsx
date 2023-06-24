// README!!拿取以登入會員資料
//step1: 在頁面引用
//=>import AuthContext from '../Contexts/AuthContext'
//step2: function裡使用useContext
//=> const { memberAuth } = useContext(AuthContext)
//裡頭即有 memberEmail,memberId,token

import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' //頁面轉向hook

const AuthContext = createContext({})
export default AuthContext

export const AuthContextProvider = function ({ children }) {
  const navigate = useNavigate()
  const memberAuthData = localStorage.getItem('beebeeMemberAuth')
  //預設未登入狀態
  const unAuth = {
    authorized: false,
    memberId: '',
    memberEmail: '',
    memberName: '',
    token: '',
  }

  let initAuth = {}

  if (memberAuthData) {
    initAuth = { ...JSON.parse(memberAuthData), authorized: true }
  } else {
    initAuth = { ...unAuth }
  }

  const [memberAuth, setMemberAuth] = useState(initAuth)

  useEffect(() => {
    try {
      if (memberAuthData) {
        const localAuth = JSON.parse(memberAuthData)

        if (
          localAuth.token &&
          localAuth.memberId &&
          localAuth.memberEmail &&
          localAuth.memberName
        ) {
          initAuth = {
            authorized: true,
            memberId: localAuth.memberId,
            memberEmail: localAuth.memberEmail,
            memberName: localAuth.memberName,
            token: localAuth.token,
          }
        }
      }
    } catch (e) {
      throw new Error(e)
    }
  }, [memberAuth])

  const Logout = () => {
    localStorage.removeItem('beebeeMemberAuth')
    localStorage.removeItem('comparing')

    setMemberAuth(unAuth)
    navigate('/bee/home')
  }

  return (
    <AuthContext.Provider value={{ memberAuth, setMemberAuth, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}
