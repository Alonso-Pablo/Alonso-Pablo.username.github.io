import { Section, ResponsiveContainer, Title, SubTitle, Details, ContainerDetails, Nav, LinkA, ContainerSvg, ScrollIt, ScrollAnimated } from './styled'
// import { Title } from '../../styles/GlobalStyle'
import { motion } from 'framer-motion';

export default function Introduction({children}) {
  const dotScroll = {
    hidden: {
      opacity: 0,
      y: -4,
      x: -8,
    },
    visible: {
      opacity: [0, 0.6, 0.8, 1, 0],
      y: [-2, 1, -18],
      x: -8,
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: [.06, .36, .85, 1.01]
      }
    }
  }
  
  return (
    <>
      <Section>

        <ResponsiveContainer >
          
          <div>
          <Title title="Me :)">Alonso<br />Pablo</Title>

          <SubTitle>Web<br />Developer</SubTitle>
          </div>

          <ContainerDetails>
            <Details>
              Hello!<br />
              &ensp;I’m not in home, but<br />
              &ensp;you can see what I&apos;m doing.<br />
              &ensp;&ensp;&ensp;Make yourself at home.
            </Details>
          </ContainerDetails>

          <Nav>
            <ul>
              <li>
                <LinkA title="Skip to section Project" href="#project">Projects</LinkA>
              </li>
              <li>
                <LinkA title="Skip to section About Me" href="#aboutMe">About me</LinkA>
              </li>
              <li>
                <LinkA title="Skip to section Contact Me" href="#contactMe">Contact me</LinkA>
              </li>
            </ul>
          </Nav>


          <ContainerSvg>

            <ScrollIt title="Scroll Down">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="28" viewBox="0 0 10 28" fill="none">
                <rect x="0.5" y="0.5" width="9" height="27" rx="4.5" stroke="#777777" />
              </svg>
              <motion.div initial="hidden" animate="visible" variants={dotScroll}>
                <ScrollAnimated></ScrollAnimated>
              </motion.div>
            </ScrollIt>

            {children}
            
          </ContainerSvg>

        </ResponsiveContainer>

      </Section>
    </>
  )
}

