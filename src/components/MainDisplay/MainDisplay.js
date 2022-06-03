import React from 'react'
import {walruses} from "../../assets/images"
import "./MainDisplay.css"
import WalrusCard from './WalrusCard'
import Calendar from './Calendar'

function MainDisplay() {

  const walrusDates= walruses.map(walrus => <WalrusCard key={walrus.showType} walrus={walrus}/>)

  return (
      <div className="main-display">
        {walrusDates}
      </div>
  )
}

export default MainDisplay