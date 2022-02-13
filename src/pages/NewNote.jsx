import { useContext, useState } from 'react'
import { ArrContext } from '../App'


import { Header } from '../components/Header'
import { NoteList } from '../components/NoteList'

import '../styles/new-note.scss'

export function NewNote() {
  // modificacoes
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] =useState('')
  const [notes, setNotes] = useContext(ArrContext)

  function handleCreateNewNote(title, noteText) {
    const newNote = [ title, noteText ]
    const updated = [...notes, newNote]

    setNotes(updated)
  }
  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleNoteTextChange = event => {
    setNoteText(event.target.value)
  }

  const createNewNote = event => {
    event.preventDefault()

    handleCreateNewNote(title, noteText)
  }

  return (
    <div className="content">
      <Header />

      <form onSubmit={createNewNote}>
        <input type="text" placeholder="Title" onChange={handleTitleChange} />
        <textarea placeholder="Take a note..." onChange={handleNoteTextChange} />
        <button type='submit'>Create Note</button>
      </form>

      <NoteList />
    </div>
  )
}
