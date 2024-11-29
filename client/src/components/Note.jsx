import DeleteIcon from "@mui/icons-material/Delete";
import handleDelete from "../utils/handleDelete";
import { useDispatch } from "react-redux";

function Note({ id, title, content }) {
  const dispatch = useDispatch()
  return (
    <div className="note-container">
      <h1>{title}</h1>
      <p>{content}</p>
      <DeleteIcon id="delete-icon" onClick={() => handleDelete(id , dispatch)} />
    </div>
  );
}
export default Note;
