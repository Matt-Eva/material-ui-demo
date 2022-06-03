import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import FormControl  from '@mui/material/FormControl'
import Tooltip from '@mui/material/Tooltip'
import InputLabel from "@mui/material/InputLabel"
import FilledInput from '@mui/material/FilledInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './MyModal.css'

function MyModal({handleLogin}) {
  const [open, setOpen] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSubmit(e){
    e.preventDefault()
    handleLogin()
  }

  return (
    <div className="my-modal">
     <Button variant='contained' onClick={handleOpen} className="my-modal__open-modal">Login</Button>
      <Modal open={open} onClose={handleClose}>
        <div className="my-modal__modal-content">
          <h3 className="my-modal__modal-header">Please enter Username and Password</h3>
          <form className="my-modal__modal-form" onSubmit={handleSubmit}>
            <FormControl  className='my-modal__username'>
              <InputLabel htmlFor='username' >Username</InputLabel>
              <FilledInput id='username' type='text'/>
            </FormControl>
            <FormControl variant='filled' className='my-modal__password'>
              <InputLabel htmlFor="password" >Password</InputLabel>
              <FilledInput 
              id='password' 
              type={showPassword? 'text': 'password'} 
              endAdornment={
                showPassword ? 
                <Tooltip title="Hide password">
                  <IconButton aria-label='toggle password visibility' onClick={() => setShowPassword(!showPassword)}> <VisibilityOff></VisibilityOff>  </IconButton>
                </Tooltip> : 
                <Tooltip title="Show password">
                  <IconButton aria-label='toggle password visibility' onClick={() => setShowPassword(!showPassword)}> <Visibility /> </IconButton>
                </Tooltip>
                }
              />
            </FormControl>
            <Button variant='outlined' onClick={handleClose} className="my-modal__close-modal">Cancel</Button>
            <Button variant='contained' type='submit' className='my-modal__submit'>Submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal