import { NoteCard } from '../components/NoteCard'
import '../styles/note-list.scss'

export function NoteList(props) {

  console.log(props)
  return (
    <div className="notes-history">
      <ul>
        {props.notes.map((note, index) => {
          // console.log(props)
          // console.log(note)
          // console.log(index)
          return (
            <li key={index}>
              <span>{note}</span>
              <NoteCard title={note} text={note}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
