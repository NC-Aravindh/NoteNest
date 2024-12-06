import { useContext, useEffect, useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import InputNote from "./components/InputNote";
import { useSelector } from "react-redux";
import useFetchNote from "./utils/useFetchNote";
import EditNote from "./components/EditNote";

function App() {
  useFetchNote(); //Fetch data after component mounts
  const { noteArr } = useSelector((store) => store.note);
  const { editNote } = useSelector((store) => store.note);

  return (
    <div className="App">
      <Header />
      <InputNote />
      <div className="noteBox">
        {noteArr.length > 0 &&
          noteArr?.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
              />
            );
          })}
      </div>
      {editNote.editEnabled && (
        <>
          <div id="overlay-container"> </div>
          <EditNote />
        </>
      )}
    </div>
  );
}

export default App;
