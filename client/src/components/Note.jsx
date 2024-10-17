import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    
  //passing the id of the note item that was deleted.  
  function sendNoteId(){
     props.onDelete(props.id)
  }

    return(

// contentEditable="true"
<div className="note-container"  >
    <h1 contentEditable='true' >{props.title}</h1>
    <p contentEditable='true' >{props.content}</p>
    <DeleteIcon id="delete-icon" onClick={sendNoteId}/>
</div>

    );

}
export default Note;