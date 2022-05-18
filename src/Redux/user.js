import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: { WordEntered: [] },
  reducers: {
    search: (state, action) => {
      state.WordEntered = action.payload.wordEntered;
    },
    close: (state, action) => {
      state.WordEntered = action.payload.wordEntered;
    }
  }
});
export const { search, close } = userSlice.actions;
export default userSlice.reducer;
