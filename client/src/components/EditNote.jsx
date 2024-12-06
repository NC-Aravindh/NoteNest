import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleEdit from "../utils/handleEdit";
import { disableEditNote } from "../utils/noteSlice";

const EditNote = () => {
    const [isEditing , setIsEditing] = useState(false)
  const dispatch = useDispatch();
  const { noteArr, editNote } = useSelector((store) => store.note);
  const titleInput = useRef();
  const contentInput = useRef();

  if (!noteArr) return;
  const fitlerNote = noteArr.filter((item) => item.id === editNote.id);
  const { title, content } = fitlerNote[0];

  return (
    <div className="editNote-container">
      {isEditing ? (
        <>
          <h1>Edit Your Note</h1>
          <input id="editTitle" placeholder={title} ref={titleInput}></input>
          <textarea
            name={title}
            id="editContent"
            placeholder={content}
            ref={contentInput}
            rows={5}
          ></textarea>
          <button
          className="editButton"
            onClick={() => {
              handleEdit(
                editNote.id,
                titleInput.current.value,
                contentInput.current.value,
                dispatch
              );
              dispatch(disableEditNote());
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2 onClick={() => setIsEditing(true)}>{title}</h2>
          <p onClick={() => setIsEditing(true)}>{content}</p>
          <button className="editButton" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EditNote;
