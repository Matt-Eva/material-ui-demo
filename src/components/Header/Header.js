import React from 'react'
import "./Header.css"
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import {Link} from "react-router-dom"
import MyModal from '../../components/Header/MyModal'
// import {Grid, Button} from "@mui/material"


function Header() {
  return (
    <Grid container spacing={1} direction="row">
      <Grid container item xs={2} justifyContent="flex-start">
        <h2>Logo</h2>
        <MyModal />
        <Link to="/">Home</Link>
      </Grid>
      <Grid container item xs={8} justifyContent="center">
        <h1>Title</h1>
      </Grid>
      <Grid container item xs={2} justifyContent="flex-end">
        <Button variant="outlined">Click Me</Button>
      </Grid>
    </Grid>
  )
}

export default Header