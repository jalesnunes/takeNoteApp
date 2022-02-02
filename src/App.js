import { Header } from './components/Header'
import { NoteList } from './components/NoteList'
import { NewNote } from './pages/NewNote'

export function App() {
  return (
    <>
      <Header />
      <NewNote />
      <NoteList />
    </>
  )
}

export default App
