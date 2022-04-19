import React from 'react'
import Header from '../../components/Header/Header'
import "./Home.css"
import Grid from "@mui/material/Grid"
// import { Grid } from "@mui/material"

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Header /> 
      </Grid>
      <Grid item xs={4}>
          <h2>Hi</h2>
      </Grid>
      <Grid item xs={6}>
          <h2>Hello</h2>
      </Grid>
    </Grid>
  )
}

export default Home