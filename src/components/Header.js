import React from 'react'
import './Header.css'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://commons.wikimedia.org/wiki/File:Logonetflix.png#/media/File:Logonetflix.png"
            alt="Netflix"
          />
        </a>
        <div className="header--user"></div>
        <a href="/">
          <img
            src="https://br.pinterest.com/pin/769763761288214223/"
            alt="usuário"
          />
        </a>
      </div>
    </header>
  )
}
