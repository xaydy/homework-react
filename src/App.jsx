import React from 'react'
import xay from './img1/xay.jpeg'
import { Box, TextField } from '@mui/material'

export default function App() {
  return (
    <div >
    <div>
      <img style={{ borderRadius: 100,marginLeft:100,marginTop:100}} src={xay} width="200" height="200" />
    </div>
    <div style={{marginLeft:400, marginTop:-200}}>
      <h1>Mr: DYVue</h1>
      <a >dy@gmail.com</a> -Administrator
      <h4>Avatar by gravatar.com Or uploaa your own...</h4>
      <h2>Dorp your files here or cilk in this area</h2>
    </div>
    <div style={{marginLeft:150,marginTop:100}}>
      <h2>Account</h2>
      <Box style={{marginTop:50}}>Email*</Box>
      <Box style={{marginTop:70}}>Password</Box>
      <Box style={{marginTop:70}}>Ful name</Box>
      <Box style={{marginTop:70}}>Title</Box>
      <Box style={{marginTop:70}}>Language</Box>
    </div>
    <div style={{marginLeft:400,marginTop:-410}}>
      <Box >
    <TextField style={{marginTop:20}} label="Dyvue"/>
    </Box>
    <Box >
    <TextField style={{marginTop:20}}  label='Dy@gmail.com' /> 
    </Box>
    <Box>
    <TextField style={{marginTop:20}} label=".........."/>
    </Box>
    <Box >
    <TextField style={{marginTop:20}} label='john Doe' /> 
    </Box>
    <Box >
    <TextField style={{marginTop:20}} label="Administrator"/>
    </Box>
    <Box >
    <TextField style={{marginTop:20}} label='English'/> 
    </Box>
    </div>
    
    
 </div>
  )
}
