import React from 'react'
import "./navbar.css";

import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import img_0 from '../../assets/VENERA-LOGO-ONLY.png'
import { NavLink } from 'react-router-dom'


function navbar() {
  return (
    <Box flex={{flexGrow:1}}>
        <AppBar position='fixed'>
            <Toolbar>
            <img src={img_0} alt="" width={'5%'}/>
                <Typography variant='h6' component={'div'} sx={{pl:5}}>
                <NavLink className="link" to="/">
                   HOME
                 </NavLink>
                </Typography>
                <Typography variant='h6' component={'div'} sx={{pl:5, pr:5}}>
                 <NavLink className="link" to="/services">
                   SERVICES
                 </NavLink>
                </Typography><Typography variant='h6' component={'div'} sx={{pr:5}}>
                 <NavLink className="link" to="/about">
                   ABOUT
                 </NavLink>
                </Typography>
                <Typography variant='h6' component={'div'} sx={{}}>
                 <NavLink className="link" to="/contact">
                   CONTACT
                 </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default navbar
