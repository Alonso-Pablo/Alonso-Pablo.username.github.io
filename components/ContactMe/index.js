import { Section, Title, Gray, Form, LabelEmail, LabelMessage, InputEmail, InputMessage, Send } from './styled';

export default function ContactMe() {
  return (
    <>
      <Section>
        <Title>Contact me</Title>
        <Gray>or leave me a message<br />after the tone: tuuu...</Gray>

        <Form >
          <LabelEmail htmlFor="email">Email</LabelEmail>
          <InputEmail type="email" name="email" id="email" placeholder="  example@example.com" />

          <LabelMessage htmlFor="message">Message</LabelMessage>
          <InputMessage type="text" name="message" id="message" placeholder="  Once Upon a time..." />

          <Send type="submit">Send</Send>
        </Form>

      </Section>
    </>
  )
}