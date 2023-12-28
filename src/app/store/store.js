import { configureStore } from "@reduxjs/toolkit";
import popularSlice from "./slice/popularSlice";
import brandsSlice from "./slice/brandsSlice";
import brandFilterSlice from "./slice/brandFilterSlice";
import bannerSlice from "./slice/bannerSlice";
import brandAllSlice from "./slice/brandAllSlice";

const store = configureStore({
  reducer: {
    popular: popularSlice,
    brand: brandsSlice,
    brandFilter: brandFilterSlice,
    banner: bannerSlice,
    all: brandAllSlice,
  },
});

export default store;
