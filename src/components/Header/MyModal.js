import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import './MyModal.css'

function MyModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="my-modal">
      <Button variant="contained" onClick={handleOpen} className="my-modal__open-modal">Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <div className="my-modal__modal-content">
          <h1 className="my-modal__modal-header">This is a Modal</h1>
          <Button variant='outlined' onClick={handleClose} className="my-modal__close-modal">Close</Button>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal