import { useState } from 'react'
import './home.css'

import {Box, Typography, Grid} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { createTheme } from '@mui/material/styles'
import {Email, PeopleAltSharp} from '@mui/icons-material';

import img_0 from '../assets/VENERA-LOGO-ONLY.png'
import animation0 from '../assets/animation-0.json'
import animation1 from '../assets/Animation-1.json'

import Lottie from 'lottie-react'

import Navbar from './for-all-component/navbar.jsx'

function home() {

  return (
    <>
    <Navbar/>
      <Box textAlign={'center'} className='a-0'>
        <Box sx={{pl:20, pr:30, mt:12, pb:10}} className='a-1' textAlign={'left'}>
          <Grid2 container spacing={2}>
          <Grid2 xs={6}>
        <Typography variant='h1' sx={{fontSize:50, fontWeight:'bold'}} gutterBottom>Venera is here to help your business to grow into the next level</Typography>
        <Typography variant='body1' className='a-2'>See the industry-leading enterprise resource planning (ERP) cloud solution, serving as your integrated management of business processes and applications, to gain resilience and real-time agility, to position yourself for growth</Typography>
          </Grid2>
          <Grid2 xs={6} sx={{mt:-9}}>
            <img src={img_0} alt="" width={400}/>
          </Grid2>
          </Grid2>
        </Box>
      <Box sx={{mt:20, mb:10}}>
        <Typography variant='h2' sx={{fontWeight:'bold'}} gutterBottom>Best Service</Typography>
        <Typography variant='h3'>Venera Service Verticals</Typography>
      </Box>
      <Box sx={{p:10, mb:10}}>
        <Box sx={{mt:10}}>
        <Grid2 container spacing={2}>
        <Grid2 xs={6}>

        <Box sx={{p:10, pt:0}} textAlign={'left'}>
        <Typography variant='h4' gutterBottom>VSS ERP Trade</Typography>
          <Typography variant='body1' className='a-2'>In the realm of trading businesses, a customer-focused Enterprise Resource Planning (ERP) system is indispensable. Tailored to meet the unique needs of the trading industry, Venera  excel in streamlining customer-related processes. From efficient order processing and inventory management to enhancing supplier relationships, these systems ensure a seamless experience for customers.</Typography>
        </Box>
        
        </Grid2>
        <Grid2 xs={6} sx={{mt:-4}}>
          <Lottie animationData={animation0} alt="" />
        </Grid2>
        </Grid2>
        <Box sx={{p:10, pt:20, pb:20}} textAlign={'left'}>
        <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <Lottie animationData={animation0}/>
        </Grid2>
        <Grid2 xs={6}>
        <Typography variant='h4' gutterBottom>VSS Garage</Typography>
          <Typography variant='body1' className='a-2'>Venera Garage management software is a vital tool for automotive repair shops, enhancing operational efficiency and customer service. With features like appointment scheduling, inventory management, and vehicle history tracking, it streamlines processes, ensuring timely repairs and accurate records. This technology not only simplifies invoicing and billing but also facilitates customer relationship management, contributing to a seamless and organized garage operation.</Typography>
        </Grid2>
        </Grid2>
        </Box>
        <Box sx={{p:10, pb:0}} textAlign={'left'}>
          <Grid2 container spacing={2}>
          <Grid2 xs={6}>
        <Typography variant='h4' gutterBottom>VSS Real Estate</Typography>
          <Typography variant='body1' className='a-2'>In the realm of real estate, Venera has become a game-changer. From digital property listings and virtual tours to sophisticated analytics for market trends, the industry has evolved. Real estate professionals leverage innovative tools for streamlined transactions, ensuring efficiency and enhancing the overall customer experience. As the digital landscape continues to shape the way properties are bought and sold, the integration of technology remains pivotal for success in the dynamic world of real estate.</Typography>
          </Grid2>
          <Grid2 xs={6}>
            <Lottie animationData={animation0}/>
          </Grid2>
          </Grid2>
        </Box>
        </Box>

      </Box>
      <Box sx={{p:20, pb:15, pt:15, borderRadius:90}} className='a-3'>
        <Typography variant='h3' sx={{fontWeight:'bold'}} gutterBottom className='a-3-0'>Features</Typography>
        <Typography variant='h3' gutterBottom className='a-3-1'>Industry-leading software features</Typography>
        <Typography variant='body1' className='a-3-2'>Finance and Accounting: General ledger, accounts payable, accounts receivable.
        
          Supply Chain Management: Inventory management, order processing, procurement, logistics.

          Centralized database that stores and manages data from various departments. This ensures data consistency and accuracy across the organization.

          Systems provide tools for generating reports and analyzing data. Business intelligence features help organizations make informed decisions by providing insights into key performance indicators (KPIs).

          Automation of routine business processes helps improve efficiency and reduces the likelihood of errors. This can include workflow automation for approval processes, order fulfillment, and more.

          Managing relationships with customers and vendors is often a key component of ERP systems. This includes features for tracking customer orders, managing vendor relationships, and ensuring timely deliveries.

          Systems often include features to help organizations comply with industry regulations and standards. This includes security measures to protect sensitive data and ensure data privacy.

          Systems is scalable to accommodate the growth of the organization. This is important for businesses that plan to expand or have fluctuating resource needs.

          Systems provide tools for managing user access and permissions. This helps ensure that employees only have access to the data and functionality relevant to their roles.

          Systems aim to provide real-time information, allowing users to make decisions based on the most up-to-date data available.

          Systems include collaboration features, such as document sharing and project management, to enhance communication and teamwork within the organization.

          Systems often allow for customization to meet the specific needs of an organization. This flexibility is crucial to adapting the software to unique business processes.</Typography>
      </Box>
      <Box sx={{p:20, pb:20, pt:20}}>
        <Lottie animationData={animation1}/>
        <Typography variant='h3' sx={{fontWeight:'bold'}} gutterBottom>Customer</Typography>
        <Typography variant='h3' gutterBottom>Customer Relationship</Typography>
        <Typography variant='body1' className='a-2'>Provide comprehensive training to end-users during the implementation phase. This should include both initial training sessions and ongoing training opportunities to ensure users are proficient with the ERP system.

        User-friendly documentation, including manuals, guides, and FAQs, to help users troubleshoot common issues and navigate the ERP system independently.

        Offer support through various channels, including phone, email, chat, and an online ticketing system. This gives users flexibility in choosing the communication method that suits them best.

        Use remote assistance tools to troubleshoot and resolve issues directly on users' systems. This can speed up problem resolution and reduce downtime.

        Keep users informed about system updates, patches, and any potential issues.

        Regularly review and improve support processes based on feedback, user experiences, and emerging trends.</Typography>
      </Box>
      <Box sx={{mb:30, mt:15, pt:10, pb:10}} className='a-4'>
        <Typography variant='h4' className='a-4-0'>Achievements</Typography>
        <Typography variant='h4' gutterBottom className='a-4-1'>Things we have achieved</Typography>
        <Grid container spacing={2} sx={{pt:5}} className='a-4-2'>
          <Grid item xs={4}>
            <PeopleAltSharp className='img-1'/>
            <Typography variant='body1' className='a-4-3'>10K Customers</Typography>
          </Grid>
          <Grid item xs={4}>
            <PeopleAltSharp className='img-1'/>
            <Typography variant='body1' className='a-4-3'>20+ City</Typography>
          </Grid>
          <Grid item xs={4}>
            <PeopleAltSharp className='img-1'/>
            <Typography variant='body1' className='a-4-3'>Profitable</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{pb:5}}>
        <Grid2 container sx={{p:5, pr:50, pl:50}}>
        <Grid2 xs={3}>
        <Typography variant='body1'>Features</Typography>
        </Grid2>
        <Grid2 xs={3}>
        <Typography variant='body1'>Enterprise</Typography>
        </Grid2>
        <Grid2 xs={3}>
        <Typography variant='body1'>Support</Typography>
        </Grid2>
        <Grid2 xs={3}>
        <Typography variant='body1'>ICO</Typography>
        </Grid2>

        <Grid2 xs={3}>
          <Email sx={{pt:5}}/>
        </Grid2>
        <Grid2 xs={3}>
          <Email sx={{pt:5}}/>
        </Grid2>
        <Grid2 xs={3}>
          <Email sx={{pt:5}}/>
        </Grid2>
        <Grid2 xs={3}>
          <Email sx={{pt:5}}/>
        </Grid2>
        </Grid2>
        <Grid2 xs={12}>
        <Typography variant='body1'>© 2020 Venera software. All rights reserved</Typography>
        </Grid2>
      </Box>
      </Box>
    </>
  )
}

export default home
