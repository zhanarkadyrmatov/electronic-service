import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://api.cheberel.kg";

export const fetchPopularData = createAsyncThunk(
  "products/fetchPopularData",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/products/product_popular/?page=${page}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error);
    }
  }
);

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPopularData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload.data;
    });
    builder.addCase(fetchPopularData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = popularSlice.actions;
export default popularSlice.reducer;
