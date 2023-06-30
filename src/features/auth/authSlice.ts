import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authActions'

interface IAuthState {
  loading: boolean
  error: string | null
  user: any
  token: string | null
  success: boolean
}

export const token = localStorage.getItem('@token')

const initialState:IAuthState = {
    loading: false,
    error: null,
    user: {},
    token,
    success: false,
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.loading = false
      state.error = null
      state.user = {}
      state.token = null
      state.success = false
      localStorage.removeItem('@token')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.success = true
        state.user = payload.user
        state.token = payload.token
        localStorage.setItem('@token', payload.token)
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { logoutUser } = counterSlice.actions

export default counterSlice.reducer