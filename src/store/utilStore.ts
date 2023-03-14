import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const util = createSlice({
  name: "util",
  initialState: {
    loading: false,
    sidebar: false,
  },

  reducers: {
    Loading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    SideBar(state, action: PayloadAction<boolean>) {
      state.sidebar = action.payload;
    },
  },
});

export const { Loading, SideBar } = util.actions;

export default util.reducer;
