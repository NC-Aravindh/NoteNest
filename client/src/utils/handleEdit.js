import fetchNotes from "./fetchNotes";

async function handleEdit(id, titleInput, contentInput, dispatch) {
  try {
    const response = await fetch("http://localhost:5000/editNote/" + id, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput,
        content: contentInput,
      }),
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    fetchNotes(dispatch);
  } catch (error) {
    console.error("Error :not able to update notes in DB:", error);
  }
}

export default handleEdit;
