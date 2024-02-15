import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"
import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardIcon from '@mui/icons-material/Keyboard';


function LeftText({text,settext}) {
    const textareRef=useRef();
    useEffect(() => {
      const resizeTextarea=()=>{
        textareRef.current.style.height="auto"
        textareRef.current.style.height=`${textareRef.current.scrollHeight}px`
      }
    if(textareRef.current){
        textareRef.current.addEventListener("input",resizeTextarea,false)
        return ()=>{
            textareRef.current.removeEventListener("input",resizeTextarea,false);
        }
    }
    },[])
    
    const [charCount, setcharCount] = useState(0)
    const [keyboard, setkeyboard] = useState(false)
    const handleInput=(e)=>{
        if(e.target.value.length<=500)
        {
            settext(e.target.value)
            setcharCount(e.target.value.length)
        }
    }
    const clearText = () => {
        if (textareRef.current) {
            textareRef.current.style.height = "auto"; 
            textareRef.current.value = "";
            setcharCount(0);
            clearText()
        }
    };
    
    const toggleKeyboard=()=>{
        setkeyboard(!keyboard)
    }
    const handleChange=(input)=>{
        settext(input)
        console.log(input)
    }
    const handleKeypress=(bt)=>{
        console.log(bt)
    }
  return (
    <Box>
        <Box sx={{border:1,borderColor:"divider",overflow:"hidden", width:"98%",borderRadius:2,display:"flex",flexDirection:"column",
    justifyContent:"space-between", minHeight:"150px"
    }}>
        <div style={{display:"flex"}}>
            <textarea value={text} 
            ref={textareRef}
            style={{
                marginRight:"5%",border:"none",outline:"none",padding:"10px",fontSize:"20px",width:"90%"
            } 
            } onChange={handleInput}  >
                
                
            </textarea>
            <CloseIcon sx={{color:"#5F6368",m:"5px",cursor:"pointer"}} onClick={clearText}  />
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
           <div>
           <IconButton >
                <MicIcon sx={{color:"#5F6368"}}/>
            </IconButton>
            {Boolean(text.length) && (
    <IconButton>
        <VolumeUpIcon />
    </IconButton>
)}
           </div>
           <div style={{display:"flex" ,alignItems:"center"}}>
            <Typography component="span" sx={{color:"#5F6368",fontSize:"12px",mr:"0.5rem"}}>
                {charCount}/500
            </Typography>
            <KeyboardIcon onClick={toggleKeyboard} sx={{cursor:"pointer" ,mr:"1rem",color:"#5F6368"}}/>

           </div>
        </div>


        </Box>
        {keyboard?(
            <Keyboard onChange={handleChange} onKeyPress={handleKeypress} />
        ):("")}
    </Box>
  )
}

export default LeftText