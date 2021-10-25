import './App.css';
//import axios from 'axios'
import { useEffect, useState } from 'react';
import AllNote from './components/allnote';

function App() {

  // const [notes,setNotes] = useState()

  // useEffect(() => {
  //   const fetchNotes = async() => {
  //     const allNotes = await fetch("/api/allnotes");
  //     const notesConvert = await allNotes.json();
  //     setNotes(notesConvert);
  //     return notesConvert
  //   }
  //   fetchNotes()
  // },[]);


  return (
    <div className="App">
      <h1>Jot app</h1>
      {/* <div className="DisplayBox">
        <AllNote
        notes={notes}
        />
      </div> */}
    </div>
  );
}

export default App;
