import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleModal, handleTabClick } from "./modalSlice";
const backendURL = "";

export const fetchRecover = createAsyncThunk(
  "users/send_code_phone",
  async ({ phone }, { rejectWithValue, dispatch }) => {
    const number = phone.replace(/\D/g, "");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        `${backendURL}users/send_code_phone/`,
        {
          phone: number,
        },
        config
      );

      dispatch(sendCodePhone(phone));
      dispatch(handleTabClick(7));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const recoverSlice = createSlice({
  name: "recover",
  initialState: {
    loading: false,
    phone: null,
    error: null,
    success: false,
  },
  reducers: {
    sendCodePhone: (state, action) => {
      state.phone = action.payload;
    },

    recoverError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecover.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecover.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchRecover.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});
export const { sendCodePhone, recoverError } = recoverSlice.actions;
export default recoverSlice.reducer;
