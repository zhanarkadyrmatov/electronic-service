import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchBrandAllData = createAsyncThunk(
  "products/product_list",
  async (count, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/products/product_list/?page=${count}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const brandAllSlice = createSlice({
  name: "all",
  initialState: {
    productAll: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrandAllData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBrandAllData.fulfilled, (state, { payload }) => {
      console.log(payload.results);
      state.status = "succeeded";
      state.productAll = [...state.productAll, ...payload.results];
    });
    builder.addCase(fetchBrandAllData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = brandAllSlice.actions;
export default brandAllSlice.reducer;
