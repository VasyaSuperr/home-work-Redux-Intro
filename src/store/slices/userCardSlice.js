import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "user";

const initialState = {
  firstName: "Test",
  lastName: "Testovych",
  isFavourite: false,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    switchFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    },
  },
});

export const { switchFavourite } = userSlice.actions;

export default userSlice.reducer;
