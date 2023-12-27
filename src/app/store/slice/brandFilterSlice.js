import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchBrandsFilterData = createAsyncThunk(
  "products/product_shop_list",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}/products/product_shop_list/${id}/`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const brandFliterSlice = createSlice({
  name: "brandFilter",
  initialState: {
    product: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrandsFilterData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBrandsFilterData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.product = payload;
    });
    builder.addCase(fetchBrandsFilterData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = brandFliterSlice.actions;
export default brandFliterSlice.reducer;
