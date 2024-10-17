import { useState } from "react";
import Note from "./components/Note"
import Header from "./components/Header";
import InputNote from "./components/InputNote";

function App() {

  //Save the state of the array of notes
  const [noteArr, setArr] = useState([])


  function handleAdd(inputNote) {
    setArr((prevVal) => { return [...prevVal, inputNote] })
    console.log(noteArr)
  }

  //return all the note items except the one which was deleted.
  function handleDelete(id) {
    setArr(prevNote => {

      return prevNote.filter((note, index) => {

        return index != id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <InputNote onClick={handleAdd} />

      <div className="noteBox">
        {noteArr.map((note, index) => {

          console.log("NOTE" + note)
          return <Note key={index} id={index} title={note.title} content={note.content} onDelete={handleDelete} />

        })}
      </div>
    </div>
  );
}

export default App;
