import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import axios from "axios";
import { handleModal, handleTabClick } from "./modalSlice";
import { userProfile } from "./signInSlice";

const backendURL = "https://api.cheberel.kg";
export const userPhoneVerify2 = createAsyncThunk(
  "auth/phone-verify",
  async ({ phone, code }, { rejectWithValue, dispatch }) => {
    const number = phone.replace(/\D/g, "");
    console.log(number, code);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${backendURL}/auth/phone-verify/`,
        {
          phone: number,
          code: code,
        },
        config
      );
      dispatch(phoneVerify(code));
      localStorage.setItem(
        "userToken",
        JSON.stringify(response.data.tokens.access)
      );
      dispatch(handleTabClick(4));
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const phoneVerifySlice2 = createSlice({
  name: "phoneVerify2",
  initialState: {
    loading: false,
    phone: null,
    code: null,
    error: null,
  },
  reducers: {
    phoneVerify: (state, action) => {
      state.code = action.payload;
    },
    phoneVerifyError2: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userPhoneVerify2.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userPhoneVerify2.fulfilled, (state, action) => {
      state.loading = false;
      state.phone = action.payload;
    });

    builder.addCase(userPhoneVerify2.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { phoneVerify, phoneVerifyError2 } = phoneVerifySlice2.actions;
export default phoneVerifySlice2.reducer;
