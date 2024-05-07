import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

import Navbar from './for-all-component/navbar'

function about() {
  return (
    <Box sx={{p:10}}>
        <Navbar/>
        <Box>
        <Typography variant='h1' gutterBottom>about</Typography>
      <Typography variant='body1'>Founded in 1990, Profile Software is a leading international software solutions provider for the Banking and Investment Management industries. The company has a presence in Europe, the Middle East, America, Asia and Africa delivering innovative solutions to both start-ups and established banking & finance institutions, through direct communication or a reliable partners network.</Typography>
        </Box>
        <Box sx={{p:10, pb:0}}>
            <Typography variant='h2' gutterBottom>Our Focus</Typography>
            <Typography variant='body1'>Profile Software offers innovative, award-winning and flexible software solutions developed with the highest standards. Continuous R&D investments and close contact with clients and associates around the world allow us to anticipate future trends and meet the growing market needs.</Typography>
        </Box>
        <Box sx={{p:10}}>
            <Typography variant='h2' gutterBottom>Our Culture</Typography>
            <Typography variant='body1'>The company provides a challenging environment that encourages initiative and promotes commitment to its clients’ business objectives.</Typography>
        </Box>
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                    <Typography variant='h3' gutterBottom>
                    Vision
                    </Typography>
                    <Typography variant='body1'>
                    To provide innovative software solutions that enable Financial Institutions and corporates across the world to deliver their full potential to their clients.
                    </Typography>
                </Grid2>
                <Grid2 xs={4}>
                    <Typography variant='h3' gutterBottom>
                    Mission
                    </Typography>
                    <Typography variant='body1'>
                    To develop and deliver reliable, client-centric software platforms, accompanied by exceptional service, that add value and support Financial Institutions.
                    </Typography>
                </Grid2>
                <Grid2 xs={4}>
                    <Typography variant='h3' gutterBottom>
                    Values
                    </Typography>
                    <Typography variant='body1'>
                    We strive for perfection; perform to excellence, assess and evolve. We are continuously innovating and reinventing ourselves, while we foster teamwork and collaboration.
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
        <Box>
            
        </Box>
    </Box>
  )
}

export default about
