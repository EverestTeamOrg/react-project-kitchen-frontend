import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inProgress: false,
  errors: null
}

export const authSlice  = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  
  }
})

export default authSlice.reducer
export const { ASYNC_START, UPDATE_FIELD_AUTH } = authSlice.actions