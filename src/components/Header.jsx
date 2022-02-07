import { auth } from '../services/firebase'

import logo from '../assets/images/logo.png'

import '../styles/header.scss'

export function Header() {
  const handleSingOut = event => {
    event.preventDefault()
    auth.signOut()
      .then(() => {
        console.log('sign out') // Sign-out successful.
      })
      .catch(error => {
        console.log(`error: ${error}`) // An error happened.
      })
  }

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="page logo" />
        </a>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a className="li-link" href="/newNote/new">
                Link
              </a>
            </li>
            <li>
              <a className="li-link" href="/">
                Link
              </a>
            </li>
            <li>
              <a onClick={handleSingOut} className="li-link" href="/">
                Link
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
