import { NoteCard } from '../components/NoteCard'
import '../styles/note-list.scss'

export function NoteList() {
  return (
    <div className="notes-history">
      <ul>
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map(category => {
          return (
            <li>
              <span>{category}</span>
              <NoteCard />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
