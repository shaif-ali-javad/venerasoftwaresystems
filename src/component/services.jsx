import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

import Navbar from './for-all-component/navbar'

function services() {
  return (
    <Box sx={{p:10}}>
    <Navbar/>
      <Box>
        <Typography variant='h1' gutterBottom>
        SERVICES
        </Typography>
        <Typography variant='body1'>
        Wide breadth of software development, mobile app development, web development and IT consulting services across the entire IT spectrum.
        </Typography>
      </Box>
      <Box sx={{p:10, pb:0}}>
        <Typography variant='h2' gutterBottom>
        WE ASSIST STARTUPS, SME'S AND LARGE ENTERPRISES IN MAKING CRITICAL BUSINESS DECISIONS.
        </Typography>
        <Typography variant='body1'>
        Xicom provides a broad range of web application development and offshore software development services to help you harness the power of technology, consulting and maximize your online business investment. Our services address specific needs of enterprise IT programs, communications and Internet technology product development. Client's benefit from seamless coordination across strategy, implementation, and management of their technology programs and from our expertise in focused industries, strong quality orientation, cross-technology expertise, and distributed project management capabilities.
        </Typography>
      </Box>
      <Box sx={{p:10}}>
        <Typography variant='h2' gutterBottom>
        OUR DEVELOPMENT PROCESS
        </Typography>
        <Typography variant='body1'>
        We deliver highest level of customer service by deploying innovative and collaborative project management systems to build the most professional, robust and highly scalable web & mobile solutions with highest quality standards.
        </Typography>
      </Box>
      <Box>
        <Grid2 container spacing={2}>
            <Grid2 xs={4}>
                <Typography variant='h3' gutterBottom sx={{fontSize:30}}>
                POST YOUR PROJECT REQUIREMENTS
                </Typography>
                <Typography variant='body1'>
                Our analysts will thoroughly review your project requirements and select the most experienced developers best suited for your project.
                </Typography>
            </Grid2>
            <Grid2 xs={4}>
                <Typography variant='h3' gutterBottom sx={{fontSize:30}}>
                DISCUSS PROJECT DETAILS WITH OUR ANALYSTS
                </Typography>
                <Typography variant='body1'>
                Our experts will contact you within no time to discuss your project related queries and to offer the best solution for your project development.
                </Typography>
            </Grid2>
            <Grid2 xs={4}>
                <Typography variant='h3' gutterBottom sx={{fontSize:30}}>
                CHOOSE ENGAGEMENT TERMS & TIMELINES
                </Typography>
                <Typography variant='body1'>
                Based on the project consultation provided by our experts, you can choose the engagement timelines for your project execution.
                </Typography>
            </Grid2>
        </Grid2>
      </Box>
    </Box>
  )
}

export default services
