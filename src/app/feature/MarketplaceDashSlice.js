import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "marketplacetabs",
  initialState: {
    activeTabSlice: 1,
  },
  reducers: {
    setActiveTabSlice: (state, action) => {
      state.activeTabSlice = action.payload;
    },
  },
});

export const { setActiveTabSlice } = tabSlice.actions;
export default tabSlice.reducer;