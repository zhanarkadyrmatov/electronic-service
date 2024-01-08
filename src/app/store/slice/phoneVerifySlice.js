import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import axios from "axios";
import { handleModal } from "./modalSlice";
import { userProfile } from "./signInSlice";

const backendURL = "https://api.cheberel.kg";
export const userPhoneVerify = createAsyncThunk(
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
      console.log(response.data.tokens.access);
      dispatch(userProfile(response.data.tokens.access));
      localStorage.setItem(
        "userToken",
        JSON.stringify(response.data.tokens.access)
      );
      dispatch(handleModal(false));
      return response;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response);
    }
  }
);

const phoneVerifySlice = createSlice({
  name: "phoneVerify",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    autoLogin: (state, action) => {
      state.userInfo = action.payload;
    },
    phoneVerifyError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userPhoneVerify.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userPhoneVerify.fulfilled, (state, action) => {
      state.loading = false;
      state.userToken = action.payload;
    });

    builder.addCase(userPhoneVerify.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});
export const { autoLogin, phoneVerifyError } = phoneVerifySlice.actions;
export default phoneVerifySlice.reducer;
