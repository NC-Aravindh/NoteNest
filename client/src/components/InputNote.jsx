import { useRef } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import handleAddNote from "../utils/handleAddNote";

function InputNote() {
  const title = useRef();
  const content = useRef();
  const dispatch = useDispatch();

  return (
    <div id="input-area-container">
      <div id="form-container">
        <input
          ref={title}
          className="title"
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          ref={content}
          name="note"
          id="note"
          placeholder="Take a note..."
          rows={5}
        ></textarea>
        <AddCircleIcon
          onClick={() => handleAddNote(title, content, dispatch)}
          type="submit"
          id="add-icon"
        />
      </div>
    </div>
  );
}

export default InputNote;
