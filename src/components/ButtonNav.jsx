import { Box,Button } from '@mui/material'
import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LanguageIcon from '@mui/icons-material/Language';

function ButtonNav() {
    const buttonStyle={
        textTransform:"none",
        fontWeight:"bold",
        borderColor:"#DADCE0",
        marginRight:"8px"
    }
  return (
    <Box sx={{m:"1rem"}}>
        <Button style={buttonStyle} variant="outlined" startIcon={<TranslateIcon/>}>Text</Button>
        <Button style={buttonStyle} variant="outlined" startIcon={<ImageIcon/>}>Images</Button>
       <Button style={buttonStyle} variant="outlined" startIcon={<InsertDriveFileIcon/>}>Documents</Button>
         <Button style={buttonStyle} variant="outlined" startIcon={<LanguageIcon/>}>Websites</Button>

    </Box>
  )
}

export default ButtonNav