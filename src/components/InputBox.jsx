import { Box} from '@mui/material'
import { React, useEffect, useState } from 'react'
import LanguageTab from './LanguageTab'
import LeftText from './LeftText'
import RightText from './RightText'

function InputBox() {
    function useDebounce(value, delay) {
        const [debounced, setDebounced] = useState(value)
        useEffect(() => {
            const handler = setTimeout(() => {
                setDebounced(value)
            }, delay)
            return () => {
                clearTimeout(handler)
            }
        }, [value, delay])
        return debounced
    }

    const [translatefrom, setTranslateFrom] = useState("all")
    const [translateto, setTranslateTo] = useState("hi")
    const [text, setText] = useState("")
    const [fetchedText, setFetchedText] = useState("")
    const debouncedText = useDebounce(text, 2000)

    useEffect(() => {
        if (debouncedText) {
            fetch(`https://api.mymemory.translated.net/get?q=${debouncedText}!&langpair=${
                translatefrom === "all" ? "en" : translatefrom}|${translateto}`
            )
            .then((res) => res.json())
            .then((data) => {
                if (data && data.responseData && data.responseData.translatedText) {
                    setFetchedText(data.responseData.translatedText);
                } else {
                    console.log("Translation not available.");
                }
            })
            
            .catch((e) => {
                console.log(e);
            });
        }
    }, [debouncedText, translatefrom, translateto]);
    
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            m: "1rem"
        }}>
            <Box sx={{ flex: 1 }}>
                <LanguageTab
                    currentLang={translatefrom}
                    setLanguage={setTranslateFrom}
                    language={[
                        { id: "all", label: "Detect Language" },
                        { id: "en", label: "English" },
                        { id: "hi", label: "Hindi" }
                    ]}
                />
                <LeftText text={text} settext={setText} />
            </Box>
            <Box sx={{ flex: 1 }}>
                <LanguageTab
                    currentLang={translateto}
                    setLanguage={setTranslateTo}
                    language={[
                        { id: "hi", label: "Hindi" },
                        { id: "en", label: "English" },
                        { id: "fr", label: "French" }
                    ]}
                />
                <RightText fetchedText={fetchedText} setfetchedText={setFetchedText} />
            </Box>
        </Box>
    )
}

export default InputBox
