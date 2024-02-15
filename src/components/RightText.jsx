import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ShareIcon from '@mui/icons-material/Share';

function RightText({ fetchedText, setFetchedText }) {
    const textareaRef = useRef();

    const resizeTextarea = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener("input", resizeTextarea, false);
            return () => {
                textareaRef.current.removeEventListener("input", resizeTextarea, false);
            }
        }
    }, []);

    useEffect(() => {
        if (textareaRef.current) {
            resizeTextarea();
        }
    }, [fetchedText]);

    return (
        <Box>
            <Box sx={{
                border: 1, borderColor: "divider", overflow: "hidden", width: "98%", borderRadius: 2, display: "flex",
                flexDirection: "column", justifyContent: "space-between", minHeight: "150px",backgroundColor:"#F5F5F5"
            }}>
                <div style={{ display: "flex" }}>
                    <textarea
                    disabled
                        value={fetchedText}
                        ref={textareaRef}
                        style={{ 
                            marginRight: "5%",backgroundColor:"#F5F5F5", border: "none", outline: "none", padding: "10px", fontSize: "20px", width: "90%"
                        }}
                    />
                    
                </div>
                <div style={{display:"flex" ,justifyContent:"space-between"}}>
           <div style={{marginBottom:"0.5rem",marginLeft:"0.7rem"}}>
            <VolumeUpIcon  sx={{color:"#5F6368"}}/>
           </div>
           <div>
            <ContentCopyIcon sx={{mr:2,color:"#5F6368"}}/>
            <ThumbsUpDownIcon sx={{mr:2,color:"#5F6368"}}/>
            <ShareIcon sx={{mr:2,color:"#5F6368"}}/>

           </div>

           </div>
            </Box>
        </Box>
    );
}

export default RightText;
