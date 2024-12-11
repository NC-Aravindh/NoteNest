import fetchNotes from "./fetchNotes";

async function handleDelete(id ,dispatch) {
  try {
    const response = await fetch("https://ec2-13-61-12-21.eu-north-1.compute.amazonaws.com:5000/deleteNote" + id, {
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
