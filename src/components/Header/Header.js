import React from 'react'
import "./Header.css"
import Button from "@mui/material/Button"
import {Link} from "react-router-dom"
import MyModal from '../../components/Header/MyModal'
import PopoutMenu from './PopoutMenu'
// import {Grid, Button} from "@mui/material"


function Header() {
  return (
    <div className="header">
        <PopoutMenu />
        <h2 className="header__logo">Logo</h2>
        <Link to="/" className="header__nav-link">Home</Link>
        <MyModal />
    </div>
  )
}

export default Header