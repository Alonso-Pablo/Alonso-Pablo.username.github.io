import { Section, ResponsiveContainer, Title, Article, Gray } from './styled';

export default function AboutMeSection() {
  return (
    <>
      <Section id="AboutMe">

        <ResponsiveContainer>

          <Title>About me</Title>

          <Article>

            <p>I&apos;m autodidactic,</p>
            <Gray>Google is my teacher.</Gray>
            <br />
            <p>I live in Argentina, Buenos Aires. UTC/GMT -03:00</p>
            <br />
            <p>I like make awesome thing with Javascript and other programming languages.</p>
            <br />
            <p>I love going to the gym</p>
            <Gray>and lift heavy weight</Gray>
            <br />
            <p>I used to draw and upload it to my account instagram</p>
            <Gray>More information in the footer :&#41;</Gray>

          </Article>

        </ResponsiveContainer>

      </Section>
    </>
  )
}