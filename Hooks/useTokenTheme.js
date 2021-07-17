import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../styles/GlobalStyle';
export default function useTokenTheme() {

  const [token, setToken] = useState({
    theme: "darkTheme"
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {

      function handleToken() {

        setToken({
          theme: window.localStorage.getItem('theme')
        });
      }

      window.addEventListener("storage", handleToken);

      handleToken();

      return () => window.removeEventListener("storage", handleToken);
    }
  }, []);
  
  return token;
}