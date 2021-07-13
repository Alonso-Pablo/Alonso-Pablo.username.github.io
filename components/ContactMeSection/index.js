import { useState } from 'react';
import { Section, ResponsiveContainer, MessageSuccesfully, Title, Gray, Form, LabelEmail, LabelMessage, InputEmail, InputMessage, Send } from './styled';

export default function ContactMe() {
  
  let [ isSent, setIsSent ] = useState(false);

  const handlerIsSent = () => {
    setIsSent(isSent = true);

    setTimeout(() => {
      setIsSent(isSent = false);
    }, 7000)
  }

  const postMessage = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.json();
  }

  const handleForm = async (e) => {
    e.preventDefault();
    
    const dataMessage = {
      "email": `${e.target.email.value}`,
      "message": `${e.target.message.value}`
    }
    console.log(dataMessage);

    // postMessage()
    handlerIsSent()

    e.target.email.value = "";
    e.target.message.value = "";
  } 

  return (
    <>
      <Section id="ContactMe">

        <ResponsiveContainer>

          { isSent && 
          <MessageSuccesfully aria-live="assertive" initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0,
                y: -4,
              },
              visible: {
                opacity: [0.4, 1, 1, 0],
                transition: {
                  duration: 5,
                  ease: [0, .3, .85, .99]
                },
                y: [-1, 2, 2, -10],

              },
            }}> Your message has been sent successfully. ✔</MessageSuccesfully>
          }
          

          <Title primary>Contact me</Title>
          <Gray>or leave me a message<br/>after the tone: tuuu...</Gray>


          <Form onSubmit={handleForm}>
            <LabelEmail htmlFor="email" >Email</LabelEmail>
            <InputEmail
            aria-label="email"
            aria-required
            required
            type="email"
            autoComplete="email"
            id="email"
            placeholder="example@example.com" />

            <LabelMessage htmlFor="message" >Message</LabelMessage>
            <InputMessage
            aria-label="message"
            aria-required
            required
            type="text"
            id="message"
            placeholder="Once Upon a time..." />

            <Send type="submit">Send</Send>
          </Form>

        </ResponsiveContainer>

      </Section>
    </>
  )
}