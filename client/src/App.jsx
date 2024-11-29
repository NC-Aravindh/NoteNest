import { useContext, useEffect, useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import InputNote from "./components/InputNote";

function App() {
  //Save the state of the array of notes
  const [noteArr, setArr] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch("http://localhost:5000/notes", {
        method: "GET",
        mode: "cors",
      });
      const json = await data.json();
      setArr(json);
    } catch (error) {
      console.error("Error: not able to get notes from DB:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  //return all the note items except the one which was deleted.
  async function handleDelete(id) {
    try {
      const response = await fetch("http://localhost:5000/deleteNote/" + id, {
        method: "DELETE",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
      fetchData();
    } catch (error) {
      console.error("Error :not able to delete notes from DB:", error);
    }
  }

  return (
    <div className="App">
      <Header />
      <InputNote fetchData={fetchData} />
      <div className="noteBox">
        {noteArr.length &&
          noteArr?.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={handleDelete}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
