import DeleteIcon from "@mui/icons-material/Delete";
import handleDelete from "../utils/handleDelete";
import { useDispatch } from "react-redux";
import { setEditNote } from "../utils/noteSlice";
import EditIcon from "@mui/icons-material/Edit";

function Note({ id, title, content }) {
  const dispatch = useDispatch();
  return (
    <div className="note-container">
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <DeleteIcon
          id="delete-icon"
          onClick={() => handleDelete(id, dispatch)}
        />
        <EditIcon id="edit-icon" onClick={() => dispatch(setEditNote(id))}>
          edit
        </EditIcon>
      </div>
    </div>
  );
}
export default Note;
