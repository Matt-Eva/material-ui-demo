import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import './MyModal.css'

function MyModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="my-modal">
      <button onClick={handleOpen} className="my-modal__open-modal">Open Modal</button>
      <Modal open={open} onClose={handleClose}>
        <div className="my-modal__modal-content">
          <h1 className="my-modal__modal-header">This is a Modal</h1>
          <button onClick={handleClose} className="my-modal__close-modal">Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal