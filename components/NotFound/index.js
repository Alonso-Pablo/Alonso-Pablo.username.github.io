import Link from 'next/link'
import { Section, ResponsiveContainer, Title, Details, Nav } from './styled';

export default function NotFound() {

  return (
    <>
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
    </>
  );
};