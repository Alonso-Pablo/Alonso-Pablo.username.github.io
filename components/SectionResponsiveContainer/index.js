import { Section, ResponsiveContainer } from './styled';

export default function SectionResponsiveContainer({children, id}) {

  return (
    <>
      <Section id={id}>
        <ResponsiveContainer >
          {children}
        </ResponsiveContainer>
      </Section>
    </>
  )
}

