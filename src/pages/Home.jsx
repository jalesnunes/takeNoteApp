import illustration from '../assets/images/illustration.svg'
import notes from '../assets/images/notes.svg'
import googleIcon from '../assets/images/google-icon.svg'

import {useNavigate } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'


import '../styles/home.scss'

export function Home() {
  const navigate = useNavigate()

  function handleLoginApp() {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider)

    navigate("/newNote/new")
  }

  

  return (
    <div id='page-login'>
      <aside>
        <img src={illustration} alt="person talking note" />
        <strong>Organize your thoughts in one place to remember later</strong>
        <p>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={notes} alt="page logo" />
          <button onClick={handleLoginApp}  className='login-google'>
            <img src={googleIcon} alt="google icon" />
            Create your account with Google
          </button>
        </div>
      </main>
    </div>
  );
}