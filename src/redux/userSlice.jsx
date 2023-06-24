import { createSlice } from '@reduxjs/toolkit'

//設定登入狀態 如果local裡面沒有資料 使用初始裝態
const initialState = {
  profile: JSON.parse(localStorage.getItem('beebeeMemberAuth')) || {
    authorized: false,
    memberId: '',
    memberEmail: '',
    memberName: '',
    token: '',
  },
}

const userSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLogin(state, action) {
      const { memberId, memberEmail, memberName, token } = action.payload

      state.profile = {
        authorized: true,
        memberId: memberId,
        memberEmail: memberEmail,
        memberName: memberName,
        token: token,
      }
    },
    setLogout(state, action) {
      state.profile = initialState.profile
    },
  },
})

export const { setLogin, setLogout } = userSlice.actions
export default userSlice.reducer
