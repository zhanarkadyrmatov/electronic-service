import { configureStore } from "@reduxjs/toolkit";
import popularSlice from "./slice/popularSlice";
import brandsSlice from "./slice/brandsSlice";
import brandFilterSlice from "./slice/brandFilterSlice";
import bannerSlice from "./slice/bannerSlice";
import brandAllSlice from "./slice/brandAllSlice";
import categorySlice from "./slice/categorySlice";
import productSlice from "./slice/productSlice";
import basketSlice from "./slice/basketSlice";
import modalSlice from "./slice/modalSlice";
import catalogslice from './slice/catalog-slice'
import signInSlice from "./slice/signInSlice";
import registerSlice from "./slice/registerSlice";

const store = configureStore({
  reducer: {
    popular: popularSlice,
    brand: brandsSlice,
    brandFilter: brandFilterSlice,
    banner: bannerSlice,
    all: brandAllSlice,
    category: categorySlice,
    product: productSlice,
    basket: basketSlice,
    modal: modalSlice,
    signIn: signInSlice,
    catalog: catalogslice,
    register: registerSlice,
  },
});

export default store;
