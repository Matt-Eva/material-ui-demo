import React, {useState} from 'react'
import Avatar from "@mui/material/Avatar"
import IconButton from '@mui/material/IconButton'
import Menu from "@mui/material/Menu"
import MenuItem from '@mui/material/MenuItem'
import './ProfileMenu.css'

function ProfileMenu({handleLogout}) {
    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)

    function handleClick(e){
      console.log(e.target)
      setAnchor(e.currentTarget)
    }

    function handleClose(){
      setAnchor(null)
    }


  return (
    <div className="profileMenu">
        <IconButton 
        onClick={handleClick}
        >
            <Avatar />
        </IconButton>
        <Menu 
        open={open} 
        anchorEl={anchor} 
        onClose={handleClose}
        onClick={handleClose}
        id='account-menu'
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
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
              right: 13,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
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