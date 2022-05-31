import { createSlice,  PayloadAction } from '@reduxjs/toolkit'
import { updateUserThunk } from "../services/thunks";


interface IInitialState {
  inProgress: boolean
}

const initialState: IInitialState = {
  inProgress: false,
}

export const settingsSlice  = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsSaved: (state: IInitialState) => {
      state.inProgress = false;
    },
    settingsPageWasUnloaded: (state) => {
      return initialState
    },

  },
  extraReducers: {
    [updateUserThunk.pending]: (state) => {
      state.inProgress = true
    },

    [updateUserThunk.rejected]: (state) => {
      state.inProgress = false
    },

    [updateUserThunk.fulfilled]: (state) => {
      state.inProgress = false
    }
  },
})

export default settingsSlice.reducer
export const {
  settingsSaved,
  settingsPageWasUnloaded} = settingsSlice.actions
