import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userCardSlice";

const store = configureStore({
  reducer: {
    user: userReduser,
  },
});

export default store;
