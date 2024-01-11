import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleTabClick } from "./modalSlice";
import { userSendCode } from "./sendCodeSlice";

const backendURL = "https://api.cheberel.kg";

export const userRegister = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue, dispatch }) => {
    const number = data.phone.replace(/\D/g, "");
    const name = data.first_name + " " + data.last_name;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${backendURL}/auth/register/`,
        {
          phone: number,
          full_name: name,
          password: data.password,
        },
        config
      );
      dispatch(userSendCode(response.data));
      dispatch(handleTabClick(5));
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isUser: "",
    loading: false,
    phone: "",
    error: null,
    success: false,
  },
  reducers: {
    autoRegister: (state, action) => {
      console.log(action.payload);
      state.phone = action.payload;
      state.isUser = action.payload;
    },
    registerError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.phone = action.payload;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { autoRegister, registerError } = registerSlice.actions;
export default registerSlice.reducer;
