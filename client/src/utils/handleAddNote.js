import fetchNotes from "./fetchNotes";

async function handleAddNote(title, content, dispatch) {
  const inputNote = {
    title: title.current.value,
    content: content.current.value,
  };
  //Resetting the input fields after adding the note.
  title.current.value = "";
  content.current.value = "";
  try {
    const response = await fetch("http://localhost:5000/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputNote),
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    fetchNotes(dispatch); //Fetch data from the DB after adding new note
    // resetInput();
  } catch (error) {
    console.error("Failure:", error);
  }
}

export default handleAddNote;
