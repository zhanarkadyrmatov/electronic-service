import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://api.cheberel.kg";

export const fetchFavoritesData = createAsyncThunk(
  "auth/favorites_list",
  async (page, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken")?.replaceAll('"', "");
      const response = await axios.get(`${backendURL}/auth/favorites_list/`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchFavoritesPatchData = createAsyncThunk(
  "auth/favorites_add_delete",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken")?.replaceAll('"', "");
      const response = await axios.patch(
        `${backendURL}/auth/favorites_add_delete/`,
        { product_id: id },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: null,
    status: "idle",
    error: null,
  },
  reducers: {
    FilterData: (state, action) => {
      state.favorites = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFavoritesData.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.favorites = payload.results;
    });
    builder.addCase(fetchFavoritesData.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    });
  },
});

export const { FilterData } = favoritesSlice.actions;
export default favoritesSlice.reducer;
