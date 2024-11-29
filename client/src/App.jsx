import { useContext, useEffect, useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import InputNote from "./components/InputNote";
import { useSelector } from "react-redux";
import useFetchNote from "./utils/useFetchNote";

function App() {
  useFetchNote(); //Fetch data after component mounts
  const { noteArr } = useSelector((store) => store.note);

  return (
    <div className="App">
      <Header />
      <InputNote />
      <div className="noteBox">
        {noteArr.length &&
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
    </div>
  );
}

export default App;
