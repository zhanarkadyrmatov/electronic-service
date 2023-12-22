import { configureStore } from "@reduxjs/toolkit";
import popularSlice from "./slice/popularSlice";

const store = configureStore({
  reducer: {
    popular: popularSlice,
  },
});

export default store;
