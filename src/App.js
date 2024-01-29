import './App.css';
import InputCard from './components/InputCard';
import Note from './components/Note';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  if(JSON.parse(localStorage.getItem('note'))==null)  localStorage.setItem('note',JSON.stringify([]))
  const storedData = JSON.parse(localStorage.getItem('note'))
  console.log(storedData)
  const [data,setData] = useState(storedData)

  useEffect(() => {
    localStorage.setItem('note',JSON.stringify(data))
  },[data])

  const newNote = (title,content)=>{
    var date = new Date()
    setData((prevData)=>{return [...prevData,{title: title,content: content,date: date.toDateString(),time: date.toTimeString(), key:uuidv4()}]})
  }
  const deleteNote = (key) => {
    const updatedData = data.filter((note) => note.key !== key);
    setData(updatedData);
  };
  
  return (
    <div className="App">
        <InputCard newNote={newNote}></InputCard>
        <div className="notecontainer">
        {data.map((note)=>{return <Note title={note.title} content={note.content} key={note.key} noteKey={note.key} date={note.date} time={note.time} deleteNote={deleteNote}></Note>})}
        </div>
    </div>
  );
}

export default App;
