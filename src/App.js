import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NewNote } from './pages/NewNote'
import { Home } from './pages/Home'
import { ViewNote } from './pages/ViewNote'

export function App() {
  

  return (
    <>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newNote/new" element={<NewNote />} />
          <Route path="/openNote/" element={<ViewNote />} />
        </Routes>
    </BrowserRouter>

    {/* <Home /> */}
      {/* modificacoes */}
      
      
    </>
  )
}

export default App
