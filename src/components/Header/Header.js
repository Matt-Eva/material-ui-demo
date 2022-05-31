import React, {useState} from 'react'
import "./Header.css"
import Button from "@mui/material/Button"
import {Link} from "react-router-dom"
import MyModal from '../../components/Header/MyModal'
import PopoutMenu from './PopoutMenu'
import ProfileMenu from './ProfileMenu'



function Header() {
  const [user, setUser] = useState(false)

  function handleLogin(){
    setUser(true)
  }

  function handleLogout(){
    setUser(false)
  }

  return (
    <div className="header">
        <PopoutMenu />
        <h2 className="header__logo">Walrus and Single</h2>
        <Link to="/" className="header__nav-link header__home-link">Home</Link>
        <Link to="/" className="header__nav-link header__about-link">About</Link>
        {user ? <ProfileMenu handleLogout={handleLogout}/> : <MyModal handleLogin={handleLogin}/>}
    </div>
  )
}

export default Header