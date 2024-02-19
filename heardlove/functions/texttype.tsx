'use client'
import React, {useEffect, useState} from "react";
const TextType = ({text} :any) => {
    const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
          if (index <= text.length) {
            setDisplayText(text.substring(0, index));
            index++;
          } else {
            clearInterval(intervalId);
          }
        }, 50);
    
        return () => clearInterval(intervalId);
      }, [text]);

    return (
        <p>{displayText}</p>
    )
}

export default TextType;