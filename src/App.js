import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { createContext } from 'react'

import { NewNote } from './pages/NewNote'
import { Home } from './pages/Home'
import { ViewNote } from './pages/ViewNote'

export const ArrContext = createContext([])

export function App() {
  const [notes, setNotes] = useState([])
  return (
    <>
      <BrowserRouter>
        <ArrContext.Provider value={[notes, setNotes]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newNote/new" element={<NewNote />} />
            <Route path="/openNote/" element={<ViewNote />} />
          </Routes>
        </ArrContext.Provider>
      </BrowserRouter>

      {/* <Home /> */}
      {/* modificacoes */}
    </>
  )
}

export default App
