import { useState } from 'react'
import { Header } from './components/Header'
import { NoteList } from './components/NoteList'
import { NewNote } from './pages/NewNote'

export function App() {
  const [notes, setNotes] = useState([])

  function createNewNote(title, noteText) {
    const newNote = [ title, noteText ]
    const updated = [...notes, newNote]

    setNotes(updated)
    // notes.push(newNote)

    // console.log(notes.length, notes)
    // setNotes(notes)
  }

  return (
    <>
      <Header />
      <NewNote createNewNote={createNewNote} />
      <NoteList notes={notes} />
    </>
  )
}

export default App
