import React, {useState} from 'react'
import Collapse from "@mui/material/Collapse"
import Grow from "@mui/material/Grow"
import Fade from "@mui/material/Fade"
import Slide from "@mui/material/Slide"
import Toggle from "@mui/material/Switch"
import "./WalrusCard.css"
import Calendar from "./Calendar"

function WalrusCard({walrus}) {
  const {showType, img} = walrus
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(!show)
  }

  if (showType === 'collapse') return (
    <div className='walrus-card'>
      <Toggle checked={show} onClick={handleShow}/>
              <label className='walrus-card__reveal-label'>Reveal</label>
              <Collapse in={show} > 
                <img src={img} className="walrus-card__profile-img"/>
              </Collapse>
        <Calendar />
    </div>
  )
  if (showType === 'grow') return (
    <div className='walrus-card'>
      <Toggle checked={show} onClick={handleShow}/>
              <label className='walrus-card__reveal-label'>Reveal</label>
              <Grow in={show}>
                <img src={img} className="walrus-card__profile-img" />
              </Grow>
        <Calendar />
    </div>
  )
  if (showType === 'fade') return (
    <div className='walrus-card'>
       <Toggle checked={show} onClick={handleShow}/>
              <label className='walrus-card__reveal-label'>Reveal</label>
              <Fade in={show}>
              <img src={img} className="walrus-card__profile-img" />
              </Fade>
        <Calendar />
    </div>
  )
  if (showType === 'slide') return (
    <div className='walrus-card walrus-card--slide'>
      <Toggle checked={show} onClick={handleShow}/>
              <label className='walrus-card__reveal-label'>Reveal</label>
              <Slide in={show} direction="up" >
                <img src={img} className="walrus-card__profile-img" />  
              </Slide>
        <Calendar />
    </div>
  )
}

export default WalrusCard