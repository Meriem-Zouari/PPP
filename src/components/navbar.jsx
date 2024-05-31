import React from 'react'
import {Link} from "react-router-dom"
import {Airplane} from "phosphor-react"
import "./navbar.css"

const navbar = () => {
  return (
    <div className='navbar' >
      <div className='links' >
        <Link to="/user/accountsettings" >Profile</Link>
        <Link to="/">Flights</Link>
        <Link to="/cart" >
        <Airplane size={32}/>       
        </Link>
      </div>
      
    </div>
  )
}

export default navbar
