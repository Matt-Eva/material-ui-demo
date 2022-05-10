import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu'
import './PopoutMenu.css'


function PopoutMenu() {
  const [open, setOpen] = useState(false)
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <div className="popout-menu">
      <MenuIcon fontSize='large'onClick={openDrawer} className="popout-menu__menu-icon"></MenuIcon>
      <Drawer anchor='left' open={open} onClose={closeDrawer}>
        <div className="popout-menu__drawer-div">
          <h1>I am in the drawer</h1>
        </div>
      </Drawer>
    </div>
  )
}

export default PopoutMenu