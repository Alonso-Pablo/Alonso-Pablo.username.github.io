import { useState } from 'react';
import { Section, ResponsiveContainer, ContainerMessage, Message, TitleSection, Details, Form, LabelEmail, LabelMessage, InputEmail, InputMessage, Send, ButtonText } from './styled';

export default function ContactMe() {
  
  const alertMessage = {
    hidden: { opacity: 0,
      y: -4,
    },
    visible: {
      opacity: [0.4, 1, 1, 0],
      transition: {
        duration: 5,
        ease: [0, .3, .85, .99]
      },
      y: [-10, 2, 3, -10],

    }, };

  let [ sentInfo, setSentInfo ] = useState(
    {
      sending: false,
      error: false,
      loading: false,
      success: false,
    }
  );

  const resetSentInfo = () => {
    setTimeout(() => {
      setSentInfo(sentInfo = {
        sending: false,
        error: false,
        loading: false,
        success: false
      });
    },
    7000); // 7 seconds - reset all 
  } // resetSentInfo

  const fetchPostDataMessage = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.json();
  } // fetchPostDataMessage

  const handleForm = async (e) => {
    e.preventDefault();

    setSentInfo(sentInfo = {
      ...sentInfo,
      sending: true,
      loading: true
    });

    const dataMessage = {
      "email": `${e.target.email.value}`,
      "message": `${e.target.message.value}`
    };

    // fetchPostDataMessage(`http://localhost:3000/api/message`, dataMessage) // dev
    fetchPostDataMessage(`https://alonso-pablo.vercel.app/api/message`, dataMessage)
      .then(data => {
        
        if (data.error === true) return setSentInfo( sentInfo = 
          {
            sending: false,
            error: true,
            loading: false,
            success: false
          });
        
        setSentInfo(sentInfo = {
          sending: false,
          error: false,
          loading: false,
          success: true
        });

        e.target.email.value = "";
        e.target.message.value = "";

        resetSentInfo();
   
      })
      .catch(e => {
        console.log(e);
        setSentInfo( sentInfo = {
          sending: false,
          error: true,
          loading: false,
          success: false
          });

        resetSentInfo();

       })
  } // handleForm

  return (
    <>
      { sentInfo.success
        ? <ContainerMessage aria-live="assertive" initial="hidden" animate="visible" variants={alertMessage}>
            <Message>Your message has been sent successfully. ✔</Message>
        </ContainerMessage>
        : <> </>
      }

      { sentInfo.error
          ? <ContainerMessage aria-live="assertive" initial="hidden" animate="visible" variants={alertMessage}>
            <Message>Bad Request. ❌</Message>
        </ContainerMessage>
          : <> </> 
      }


      <TitleSection>Contact me</TitleSection>
      <Details title="uuuu... are you done?">or leave me a message<br/>after the tone: tuuu...</Details>


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

        <LabelMessage htmlFor="message">Message</LabelMessage>
        <InputMessage
        aria-label="message"
        aria-required
        required
        type="text"
        id="message"
        placeholder="Once Upon a time..." />

        <Send type="submit">
          <ButtonText>Send</ButtonText>
        </Send>

      </Form>
    </>
  )
}