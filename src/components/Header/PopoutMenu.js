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
      <Drawer anchor='right' open={open} onClose={closeDrawer}>
        <div className="popout-menu__drawer-div">
          <h2>My Info</h2>
          <div>Email</div>
          <div>My Profile</div>
          <div>My Data</div>
        </div>
      </Drawer>
    </div>
  )
}

export default PopoutMenu