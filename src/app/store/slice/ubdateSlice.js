import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = "";

export const updateDate = createAsyncThunk(
  "users/update_user",
  async function (selectedFile, { rejectWithValue, dispatch }) {
    try {
      const token = localStorage.getItem("userToken")?.replaceAll('"', "");
      const formData = new FormData();
      formData.append("image_profile", selectedFile);
      const response = await axios.patch(
        `${backendURL}users/update_user/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(userProfile(token));
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ubdateSlice = createSlice({
  name: "ubdate",
  initialState: {
    photo: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateDate.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateDate.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.photo = action.payload;
    });
    builder.addCase(updateDate.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});
export const {} = ubdateSlice.actions;
export default ubdateSlice.reducer;
