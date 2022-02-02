import { useState } from 'react'
import '../styles/new-note.scss'

export function NewNote() {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] =useState('')

  

  const handleTitleChange = event => {
    setTitle(event.target.value)

    console.log(title)
  }

  const handleNoteTextChange = event => {
    setNoteText(event.target.value)
    console.log(noteText)
  }

  return (
    <div className="content">
      <form>
        <input type="text" placeholder="Title" onChange={handleTitleChange} />
        <textarea placeholder="Take a note..." onChange={handleNoteTextChange} />
        <button type='submit'>Create Note</button>
      </form>
    </div>
  )
}
