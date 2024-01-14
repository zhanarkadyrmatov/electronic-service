import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    tap: 1,
    value: 1,
    modal: false,
    profil: 1,
  },
  reducers: {
    handleTabProfil: (state, action) => {
      state.tap = action.payload;
    },
    handleTabClick: (state, action) => {
      state.value = action.payload;
    },
    handleModal: (state, action) => {
      state.modal = action.payload;
    },
    handleProfil: (state, action) => {
      state.profil = action.payload;
    },
  },
});
export const { handleTabClick, handleModal, handleProfil, handleTabProfil } =
  modalSlice.actions;
export default modalSlice.reducer;
