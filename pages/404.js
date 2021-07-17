import { Footer } from '../components';
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme } from "../styles/GlobalStyle"

export default function Custom404() {
  return (
    <>
    <ThemeProvider theme={ darkTheme }>
      <GlobalStyles />
      <Section>
        <ResponsiveContainer>
          <Title title="???">
            Error 404<br/>
            Page Not Found
          </Title>

          <Details>
            <span>
              Unfortunately,<br />
              &ensp;Here is not what<br />
              &ensp;&ensp;you are looking for.
            </span>
          </Details>

          <Nav>
            <Link href="/">
              <a>
                <h2 title="Go to Home, Sweet Home">Let&apos;s go back!</h2>
              </a>
            </Link> 
          </Nav>

        </ResponsiveContainer>
      </Section>

      {/* <NotFound/> */}

      <Footer/>
      </ThemeProvider>
    
    </>
  );
};

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 535px;
  justify-content: center;
  align-items: center;
`;

const ResponsiveContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  height: 90%;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 5.5rem;
  line-height: 80%;
  margin-bottom: 10px;
`;

const Details = styled.h2`
  display: flex;
  justify-content: center;
  color: #777777;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 100%;
  margin-bottom: 30px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  font-weight: 900;
  text-align: end;
  margin-bottom: 40px;

  & ul li {
    margin-bottom: 10px;
  }
`;