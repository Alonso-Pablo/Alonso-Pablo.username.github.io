import { Section, ResponsiveContainer, Title, Gray, Form, LabelEmail, LabelMessage, InputEmail, InputMessage, Send } from './styled';

export default function ContactMe() {
  return (
    <>
      <Section id="ContactMe">

        <ResponsiveContainer>

          <Title>Contact me</Title>
          <Gray>or leave me a message<br />after the tone: tuuu...</Gray>


          <Form onSubmit={(e) => { e.preventDefault(); console.log(e.target.email.value); console.log(e.target.message.value); }}>
            <LabelEmail htmlFor="email" >Email</LabelEmail>
            <InputEmail aria-required required type="email" autoComplete="email" id="email" placeholder="example@example.com" />

            <LabelMessage htmlFor="message" >Message</LabelMessage>
            <InputMessage aria-required required type="text" id="message" placeholder="Once Upon a time..." />

            <Send type="submit" >Send</Send>
          </Form>

        </ResponsiveContainer>

      </Section>
    </>
  )
}