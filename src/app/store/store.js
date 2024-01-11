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
import catalogslice from "./slice/catalog-slice";
import signInSlice from "./slice/signInSlice";
import registerSlice from "./slice/registerSlice";
import storiesSlice from "./slice/storiesSlice";
import ubdateSlice from "./slice/ubdateSlice";
import favoritesSlice from "./slice/favoritesSlice";
import newPasswordSlice from "./slice/newPasswordSlice";
import phoneVerifySlice from "./slice/phoneVerifySlice";
import phoneVerifySlice2 from "./slice/phoneVerifySlice2";
import recoverSlice from "./slice/recoverSlice";
import sendCodeSlice from "./slice/sendCodeSlice";

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
    recover: recoverSlice,
    stories: storiesSlice,
    ubdate: ubdateSlice,
    favorites: favoritesSlice,
    newpassword: newPasswordSlice,
    phoneVerify: phoneVerifySlice,
    phoneVerify2: phoneVerifySlice2,
    sendCode: sendCodeSlice,
  },
});

export default store;
