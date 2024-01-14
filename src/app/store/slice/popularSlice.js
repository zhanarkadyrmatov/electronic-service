import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchPopularData = createAsyncThunk(
  "products/fetchPopularData",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/products/product_popular/?page=${page}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getCategoryPopularData = createAsyncThunk(
  "products/getCategoryPopularData",
  async (datas, { rejectWithValue }) => {
    const page = datas[0]
    const categoryId = datas[1]
    console.log(datas,'asdasdasd');
    try {
      const response = await axios.get(`${backendURL}/products/product_popular/?page=${page}&category_id=${categoryId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
const popularSlice = createSlice({
  name: "popular",
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPopularData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    });
    builder.addCase(fetchPopularData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });

    builder.addCase(getCategoryPopularData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCategoryPopularData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    });
    builder.addCase(getCategoryPopularData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = popularSlice.actions;
export default popularSlice.reducer;
