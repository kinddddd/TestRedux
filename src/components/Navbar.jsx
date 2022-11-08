import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="" activeclassname={'active'}>Home</NavLink>
        <NavLink to="characters" activeclassname={'active'}>Characters</NavLink>
        <NavLink to="planets" activeclassname={'active'}>Planets</NavLink>
        <NavLink to="addcharacters" activeclassname={'active'}>Add Characters</NavLink>
    </nav>
  )
}

export default Navbar