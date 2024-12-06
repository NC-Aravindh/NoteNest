import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteArr: [],
    editNote: {
      id: null,
      editEnabled: false,
    },
  },
  reducers: {
    updateNoteArray: (state, action) => {
      state.noteArr = action.payload;
    },
    setEditNote: (state, action) => {
      state.editNote.id = action.payload;
      state.editNote.editEnabled = true;
    },
    disableEditNote: (state) => {
      state.editNote.id = null;
      state.editNote.editEnabled = false;
    },
  },
});

export const { updateNoteArray, setEditNote, disableEditNote } =
  noteSlice.actions;

export default noteSlice.reducer;
