import { Introduction, SectionResponsiveContainer, ProjectsSection, AboutMeSection, ContactMeSection, Footer } from '../components'

import useWindowSize from '../Hooks/useWindowSize';

import { useEffect, useState } from 'react'
import ThemeTogglerButton from '../components/ThemeTogglerButton'
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../styles/GlobalStyle"

const Button = styled.button`
  overflow: hidden;
  background-color: transparent;
  height: 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

export default function Home() {

  const { width } = useWindowSize()

  useEffect(() => {

    if (width > 768 ) {
    darkTheme.title.fontSize = '8.5rem';
    lightTheme.title.fontSize = '8.5rem';
    
    darkTheme.subtitle.fontSize = '2.5rem';
    lightTheme.subtitle.fontSize = '2.5rem';

    darkTheme.details.fontSize = '2.5rem';
    lightTheme.details.fontSize = '2.5rem';

    darkTheme.linka.fontSize = '3rem';
    lightTheme.linka.fontSize = '3rem';

    darkTheme.titlesection.fontSize = '4rem';
    lightTheme.titlesection.fontSize = '4rem';
    
  }
  }, [width])

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>

      <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme  }>
        <GlobalStyles />
        
        <Introduction>
            <Button title="Change the theme" onClick={() => themeToggler()}>
              <ThemeTogglerButton/>
            </Button>
        </Introduction>

        <SectionResponsiveContainer id="project">
          <ProjectsSection />
        </SectionResponsiveContainer>


        <SectionResponsiveContainer id="aboutMe">
          <AboutMeSection />
        </SectionResponsiveContainer>


        <SectionResponsiveContainer id="contactMe">
          <ContactMeSection />
        </SectionResponsiveContainer>

        <Footer />

        </ThemeProvider>
    </>
  )
}


