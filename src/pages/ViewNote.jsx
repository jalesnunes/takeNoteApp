import { useContext } from 'react'
import { ArrContext } from '../App'
import { Header } from '../components/Header'

import '../styles/view-note.scss'

export function ViewNote() {
  const [notes] = useContext(ArrContext)
  return (
    <>
      <Header />
    
      <h1>{notes[0][0]}</h1>
      <h1>{notes[0][1]}</h1>
    </>
  )
}
