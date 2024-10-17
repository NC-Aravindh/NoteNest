import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';



function InputNote({ onClick }) {

  const [inputNote, setInput] = useState({
    title: '',
    content: ''
  });

  function handleTitleChange(event) {
    const title = event.target.value;
    setInput((prevState) => {
      return {
        ...prevState,
        title: title
      }
    })

  }

  function handleContentChange(event) {
    const content = event.target.value;
    setInput((prevState) => {
      return {
        ...prevState,
        content: content
      }
    })
  }
  //After the user enters the input and adds the note. Remove the text from the
  //input area title and content
  function resetInput() {
    setInput({
      title: '',
      content: ''
    })
  }


  return (
    <div id="input-area-container">
      <input onChange={handleTitleChange} value={inputNote.title} className="title" type="text" name="title" placeholder="Title" />
      <textarea onChange={handleContentChange} value={inputNote.content} name="note" id="note" placeholder="Take a note..." rows={5}></textarea>
      <AddCircleIcon id='add-icon' onClick={
        () => {
          onClick(inputNote);
          resetInput();
        }
      }
      />

    </div>

  );

}

export default InputNote;