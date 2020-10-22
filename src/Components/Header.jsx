import React from 'react'
import './Header.css'


export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <span className='navbar-toggle' id='navbar'>
          <i className='fas fa-bars'></i>
        </span>
        <h1 className='logo'>Bananas for Scale</h1>
      </nav>
    </header>
  )
}