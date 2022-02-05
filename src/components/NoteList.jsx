import { NoteCard } from '../components/NoteCard'
import '../styles/note-list.scss'

import {useNavigate } from 'react-router-dom'

export function NoteList(props) {
  const navigate = useNavigate()

  function openNote() {
    navigate("/openNote/")
  }

  // console.log(props)
  return (
    <div className="notes-history">
      <ul>
        {props.notes.map((note, index) => {
          // console.log(props)
          // console.log(note)
          // console.log(index)
          return (
            <li onClick={openNote} key={index}>
              <span>{note[1]}</span>
              <NoteCard title={note} text={note}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
