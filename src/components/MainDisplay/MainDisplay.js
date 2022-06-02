import React, {useState, useRef} from 'react'
import Collapse from "@mui/material/Collapse"
import Grow from "@mui/material/Grow"
import Fade from "@mui/material/Fade"
import Slide from "@mui/material/Slide"
import Toggle from "@mui/material/Switch"
import {images} from "../../assets/images"
import "./MainDisplay.css"

function MainDisplay() {
  const [collapseShow, setCollapseShow] = useState(false)
  const [growShow, setGrowShow] = useState(false)
  const [fadeShow, setFadeShow] = useState(false)
  const [slideShow, setSlideShow] = useState(false)

  const slideContainerRef = useRef(null)

  const handleCollapse = () => setCollapseShow(!collapseShow)
  const handleGrow = () => setGrowShow(!growShow)
  const handleFade = () => setFadeShow(!fadeShow)
  const handleSlide = () => setSlideShow(!slideShow)

  const [img1, img2, img3, img4, img5] = images
  return (
      <div className="main-display">
          <div className="main-display__collapse-div main-display__image-div">
              <Toggle checked={collapseShow} onClick={handleCollapse}/>
              <label>Reveal</label>
              <Collapse in={collapseShow} > 
                <img src={img1} className="main-display__img"/>
              </Collapse>
          </div>
          <div className="main-display__grow-div main-display__image-div">
              <Toggle checked={growShow} onClick={handleGrow}/>
              <label>Reveal</label>
              <Grow in={growShow}>
                <img src={img2} className="main-display__img" />
              </Grow>
          </div>
          <div className='main-display__fade-div main-display__image-div'>
              <Toggle checked={fadeShow} onClick={handleFade}/>
              <label>Reveal</label>
              <Fade in={fadeShow}>
              <img src={img4} className="main-display__img" />
              </Fade>
              
          </div>
          <div className='main-display__slide-div main-display__image-div' ref={slideContainerRef}>
              <Toggle checked={slideShow} onClick={handleSlide}/>
              <label>Reveal</label>
              <Slide in={slideShow} direction="up" container={slideContainerRef.current}>
                <img src={img5} className="main-display__img" />  
              </Slide>
          </div>
      </div>
  )
}

export default MainDisplay