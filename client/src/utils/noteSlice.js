import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteArr:[]
  },
  reducers: {
    updateNoteArray: (state, action) => {
      state.noteArr = action.payload;
    },
  },
});

export const {updateNoteArray} = noteSlice.actions;

export default noteSlice.reducer;
