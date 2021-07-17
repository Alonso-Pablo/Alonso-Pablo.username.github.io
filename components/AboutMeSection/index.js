import { Section, ResponsiveContainer, TitleSection, Article, Br, Paragraph, ParagraphGray } from './styled';

export default function AboutMeSection() {
  return (
    <>
      <TitleSection>About me</TitleSection>

      <Article>
        

        <div>
          <Paragraph>I live in Argentina, Buenos Aires. UTC/GMT (-03:00)</Paragraph>
        </div>
        <Br>
          <Paragraph>I like make awesome thing with Javascript and other programming languages.</Paragraph>
        </Br>
        <Br>
          <Paragraph>I never stop learging new thing,</Paragraph>
          <ParagraphGray>Platzi, Medium, Stack Overflow and Documentation.</ParagraphGray>
        </Br>
        <Br>
          <Paragraph>I love going to the gym</Paragraph>
          <ParagraphGray>and lift heavy weight</ParagraphGray>
        </Br>
        <Br>
          <Paragraph>I used to draw and upload it to my account instagram</Paragraph>
          <ParagraphGray>More information in the footer...</ParagraphGray>
        </Br>

      </Article>
    </>
  )
}