import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.text}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
