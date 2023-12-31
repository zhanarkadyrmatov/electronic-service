import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchCategoryData = createAsyncThunk(
  "products/category_list",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendURL}/products/category_list/`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCategoryData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.category = payload.results;
    });
    builder.addCase(fetchCategoryData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
