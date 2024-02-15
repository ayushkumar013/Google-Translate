import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Tabs, Tab, Menu, MenuItem, IconButton } from '@mui/material'
import React, { useState } from 'react'

function LanguageTab({ language, setLanguage, currentLang }) {
    const [anchorEl, setanchorEl] = useState(null)
    const handleClick=(e)=>{
        !setanchorEl(e.currentTarget)
    }
    const handleClose = (e) => {
      setLanguage(e); 
      setanchorEl(null);
    };
    
    return (
    
    <>
      <Tabs
        sx={{ border: "none" }}
        value={currentLang}
        onChange={(event, newValue) => setLanguage(newValue)}
      >
        {language.map((lang) => (
          <Tab
          sx={{
            textTransform:"none",
            fontWeight:600,
            display:{
              xs:currentLang===lang.id?"initial":"none",
              md:"initial"
            }

          }}
            key={lang.id}
            label={lang.label}
            value={lang.id}
          />
        ))}
        <IconButton sx={{width:50,height:50}} onClick={handleClick}>
     <ExpandMoreOutlinedIcon/>
        </IconButton>
        <Menu 
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    keepMounted
    onClose={()=>setanchorEl(null)}
>
    {language.map((lang) => (
        <MenuItem key={lang.id} onClick={() => handleClose(lang.id)}>
            {lang.label}
        </MenuItem>
    ))}
</Menu>

      </Tabs>
    </>
  )
}

export default LanguageTab
