import { configureStore } from "@reduxjs/toolkit";
import popularSlice from "./slice/popularSlice";
import brandsSlice from "./slice/brandsSlice";
import brandFilterSlice from "./slice/brandFilterSlice";

const store = configureStore({
  reducer: {
    popular: popularSlice,
    brand: brandsSlice,
    brandFilter: brandFilterSlice,
  },
});

export default store;
