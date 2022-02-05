import logo from '../assets/images/logo.png'

import '../styles/header.scss'

export function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="page logo" />
        </a>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a className='li-link' href="/newNote/new">Link</a>
            </li>
            <li>
              <a className='li-link' href="/">Link</a>
            </li>
            <li>
              <a className='li-link' href="/">Link</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
