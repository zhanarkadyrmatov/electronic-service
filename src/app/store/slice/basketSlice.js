import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchBasketData = createAsyncThunk(
  "products/cart_list",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.cheberel.kg/products/cart_list/`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// export const fetchBasketPostData = createAsyncThunk(
//   "products/cart_create",
//   async (data, { rejectWithValue, dispatch }) => {
//     console.log(data);
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await axios.post(
//         `${backendURL}/products/cart_create/`,
//         {
//           product_variations: data.page,
//           product_count: data.count,
//         },
//         config
//       );
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBasketData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBasketData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    });
    builder.addCase(fetchBasketData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const {} = basketSlice.actions;
export default basketSlice.reducer;
