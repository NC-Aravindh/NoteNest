import { updateNoteArray } from "./noteSlice";

const fetchNotes = async (dispatch) => {
  try {
    const data = await fetch("http://localhost:5000/notes", {
      method: "GET",
      mode: "cors",
    });
    const json = await data.json();
    dispatch(updateNoteArray(json));
  } catch (error) {
    console.error("Error: not able to get notes from DB:", error);
  }
};

export default fetchNotes;
