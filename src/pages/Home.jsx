import illustration from '../assets/images/illustration.svg'
import notes from '../assets/images/notes.svg'
import googleIcon from '../assets/images/google-icon.svg'
import faceIcon from '../assets/images/facebook-icon.svg'

import {useNavigate } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'
import { FacebookAuthProvider } from "firebase/auth";


import '../styles/home.scss'

export function Home() {
  const navigate = useNavigate()

  function handleLoginAppFace() {
    const provider = new FacebookAuthProvider()

    auth.signInWithPopup(provider)

    navigate("/newNote/new")
  }

  function handleLoginAppGoogle() {
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
          <button onClick={handleLoginAppGoogle}  className='login-google'>
            <img src={googleIcon} alt="google icon" />
            Login with Google
          </button>

          <button onClick={handleLoginAppFace} className='login-facebook'>
            <img src={faceIcon} alt="facebbok icon" />
            Login with Facebook
          </button>
        </div>
      </main>
    </div>
  );
}