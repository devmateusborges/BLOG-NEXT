import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const util = createSlice({
  name: "util",
  initialState: {
    loading: false,
  },

  reducers: {
    Loading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { Loading } = util.actions;

export default util.reducer;
