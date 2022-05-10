import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import MainDisplay from '../../components/MainDisplay/MainDisplay'

function Home() {
  return (
    <div className="home">
      <Header/>
      <MainDisplay />
    </div>
  )
}

export default Home