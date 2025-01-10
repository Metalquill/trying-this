import React from 'react'

export default function Header() {
  return (
   <div className='nav-wrapper'>
    <nav className='blue lighten-2'>
        <a href="#" className="brand-logo center">Anything-App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href='/'>Home</a></li>
            <li><a href='/cat'>Cat</a></li>
            <li><a href='/weather'>Weather</a></li>
        </ul>
    </nav>
   </div>
  )
}
