import React from 'react'
import "./Home.css"
import Grid from "@mui/material/Grid"
import Drawer from "@mui/material/Drawer"
import Modal from "../../components/Header/Modal"
// import { Grid } from "@mui/material"
import Header from '../../components/Header/Header'
import MainDisplay from '../../components/MainDisplay/MainDisplay'

function Home() {
  return (
    <>
      {/* <Modal /> */}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <MainDisplay />
        </Grid>
      </Grid>
    </>
  )
}

export default Home