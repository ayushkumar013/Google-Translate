import { Box } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import logo from "/public/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flex:1,
        height:"4.5%",
        borderBottom:"1px solid rgba(0,0,0,0.12)",
        p:2
    }}>
        <Box sx={{
            display:"flex",  alignItems:"center"
        }}>
            <MenuIcon sx={{ml:"1rem",mr:"1.3rem",color:"#5F6368"}}/>
            <Box sx={{width:"150px",height:"auto",display:{xs:"none",sm:"block"}}}
            component="img"
            src={logo} alt='logo' 
            />
        </Box>
        <Box sx={{display:"flex",alignItems:"center",mr:"1rem"}}>
            <AppsIcon sx={{mr:"1.2rem",color:"#5F6368"}} />
            <AccountCircleIcon sx={{width:"30px",height:"30px",color:"#5F6368"}}/>
        </Box>
    </Box>
  )
}

export default Header