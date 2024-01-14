import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = "https://api.cheberel.kg";
export const postDataQuestionnaire = createAsyncThunk(
  "questionnaire/postDataQuestionnaire",
  async (data, { rejectWithValue }) => {
    data.password_face = data.password_face[0];
    data.password_back = data.password_back[0];
    console.log(data), "asdasdasd";
    try {
      const response = await axios.post(
        `${backendURL}/auth/create_questionnaire/`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postDataQuestionnaire.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postDataQuestionnaire.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postDataQuestionnaire.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default questionnaireSlice;
