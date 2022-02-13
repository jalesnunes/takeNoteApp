import { NoteCard } from '../components/NoteCard'
import '../styles/note-list.scss'
import deleteBtn from '../assets/images/delete.svg'
import editBtn from '../assets/images/edit.svg'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { ArrContext } from '../App'

export function NoteList() {
  const navigate = useNavigate()
  
  const [notes, setNotes] = useContext(ArrContext)

  function openNote() {
    navigate('/openNote/')
  }

  function deleteNote(index) {
    console.log(index)
    let arrNotes = notes
    arrNotes.splice(index,1)
    arrNotes = [...notes]
    
    setNotes(arrNotes);
  }

  // console.log(props)
  return (
    <div className="notes-history">
      <ul>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <div className="buttons">
                <img onClick={openNote} src={editBtn} alt="edit button" />
                <img onClick={() =>deleteNote(index)} src={deleteBtn} alt="delete button" />
              </div>

              <NoteCard title={note} text={note} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
