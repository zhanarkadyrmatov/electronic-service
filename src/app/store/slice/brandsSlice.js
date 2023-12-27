import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchBrandsData = createAsyncThunk(
  "business/shop_list",
  async (page, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${backendURL}/business/shop_list/`);
      return response.data;
    } catch (error) {
      console.log("Error fetching data:", error);
      return rejectWithValue(error);
    }
  }
);

const brandsSlice = createSlice({
  name: "brand",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrandsData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBrandsData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    });
    builder.addCase(fetchBrandsData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = brandsSlice.actions;
export default brandsSlice.reducer;
