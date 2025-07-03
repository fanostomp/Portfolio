// hooks/useTypewriter.ts

import { useState, useEffect } from 'react';

// This custom hook simulates a typewriter effect for a given string.
export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // Prevent the effect from running on the server
    if (typeof window === 'undefined') {
        return;
    }
      
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Cleanup function to clear the interval when the component unmounts
    // or when the text/speed dependencies change.
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]); // Re-run the effect if text or speed changes

  return displayText;
};