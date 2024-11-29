import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function InputNote({fetchData}) {
  const [inputNote, setInput] = useState({
    title: "",
    content: "",
  });

  function handleTitleChange(event) {
    const title = event.target.value;
    setInput((prevState) => {
      return {
        ...prevState,
        title: title,
      };
    });
  }

  function handleContentChange(event) {
    const content = event.target.value;
    setInput((prevState) => {
      return {
        ...prevState,
        content: content,
      };
    });
  }
  //After the user enters the input and adds the note. Remove the text from the
  //input area title and content
  function resetInput() {
    setInput({
      title: "",
      content: "",
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

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
      await fetchData(); //Fetch data from the DB after adding new note
      resetInput();
    } catch (error) {
      console.error("Failure:", error);
    }
  }

  return (
    <div id="input-area-container">
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleTitleChange}
            value={inputNote.title}
            className="title"
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            onChange={handleContentChange}
            value={inputNote.content}
            name="note"
            id="note"
            placeholder="Take a note..."
            rows={5}
          ></textarea>
          <button type="submit" id="add-icon">
            <AddCircleIcon style={{ fontSize: "35" }} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputNote;
