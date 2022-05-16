import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getTagsThunk} from "./thunks";

interface IInitialState {
  tags: Array<string>;
}

const initialState: IInitialState = {
  tags: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homePageWasUnloaded: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [getTagsThunk.fulfilled]: (state: IInitialState, action: PayloadAction<IInitialState>) => {
      state.tags = action.payload.tags;
    },
  },
});

export default homeSlice.reducer;
export const { homePageWasUnloaded } = homeSlice.actions;
