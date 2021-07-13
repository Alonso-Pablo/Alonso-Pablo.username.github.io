import { Section, ResponsiveContainer, Titles, Name, Resume, Details, Nav, Scroll, ScrollAnimated } from './styled'
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <>
      <Section>

        <ResponsiveContainer >

          <Titles>

            <Name title="Me :)">Alonso<br />Pablo</Name>

            <Resume>Web<br />Developer</Resume>

          </Titles>

          <Details>
            <span>
              Hello!<br />
              &ensp;I’m not in home, but<br />
              &ensp;you can see what I&apos;m doing.<br />
              &ensp;&ensp;&ensp;Make yourself at home.
            </span>
          </Details>

          <Nav>
            <ul>
              <li>
                <a title="Skip to section Project" href="#Project"><span>Projects</span></a>
              </li>
              <li>
                <a title="Skip to section About Me" href="#AboutMe"><span>About me</span></a>
              </li>
              <li>
                <a title="Skip to section Contact Me" href="#ContactMe"><span>Contact me</span></a>
              </li>
            </ul>
          </Nav>



          <Scroll title="Scroll Down">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="28" viewBox="0 0 10 28" fill="none">
              <rect x="0.5" y="0.5" width="9" height="27" rx="4.5" stroke="white" />
            </svg>
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0,
                y: -4,
                x: -8,
              },
              visible: {
                opacity: [0, 0.6, 0.8, 1, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: [.06, .36, .85, 1.01]
                },
                y: [-2, 1, -18],
                x: -8,
              },
            }}>
              <ScrollAnimated></ScrollAnimated>
            </motion.div>
          </Scroll>


        </ResponsiveContainer>

      </Section>
    </>
  )
}