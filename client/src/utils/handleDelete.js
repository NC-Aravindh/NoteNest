import fetchNotes from "./fetchNotes";

async function handleDelete(id ,dispatch) {
  try {
    const response = await fetch("http://localhost:5000/deleteNote/" + id, {
      method: "DELETE",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    fetchNotes(dispatch);
  } catch (error) {
    console.error("Error :not able to delete notes from DB:", error);
  }
}

export default handleDelete;
