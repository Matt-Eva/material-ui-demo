import React, {useState} from 'react'
import Avatar from "@mui/material/Avatar"
import IconButton from '@mui/material/IconButton'
import Menu from "@mui/material/Menu"
import MenuItem from '@mui/material/MenuItem'
import './ProfileMenu.css'

function ProfileMenu({handleLogout}) {
    const [anchor, setAnchor] = useState(null)
    const [open, setOpen]= useState(false)
    // const open = Boolean(anchor)

    function handleClick(e){
      setAnchor(e.target)
      setOpen(true)
    }

    function handleClose(){
      setOpen(false)
    }


  return (
    <div className="profile-menu">
        <Avatar onClick={handleClick} className="profile-menu__button"></Avatar>
        <Menu 
        open={open} 
        anchorEl={anchor} 
        onClose={handleClose}
        onClick={handleClose}

        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 2.6,
            '&.MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 0,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 16,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          }
        }}
        >
            <MenuItem className="profile-menu__menu-item">
            Profile
            </MenuItem>
            <MenuItem>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              Logout
            </MenuItem>
        </Menu>
    </div>
  )
}

export default ProfileMenu