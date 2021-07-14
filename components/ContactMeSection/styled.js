import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding-top: 80px;
  border-top: 1px solid #4A4A4A;
  padding-bottom: 80px;
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  align-items: center;
  flex-direction: column;
`;

export const MessageSuccesfully = styled(motion.div)`
  position: -webkit-sticky;
  position: fixed;
  top: 1%;
  width: 80%;
  background-color: White;
  color: Black;
  text-align: center;
  font-size: 2rem;
  padding: 20px 0;
  border-radius: 2px;
  border: 1px solid #777777;
  z-index: 9001;
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
`;

export const Gray = styled.p`
  color: #777777;
  margin-bottom: 50px;
  font-size: 1.8rem;
  font-weight: 900;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const LabelEmail = styled.label`
  position: absolute;
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
  font-size: 1.7rem;
  background-color: black;
  padding: 0 2px;
  border-radius: 2px;
  left: 2%;
  top: -7%;
`;

export const LabelMessage = styled(LabelEmail)`
  left: 1.5%;
  top: 32%;
`;

export const InputEmail = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 20px;
  color: white;
  font-size: 1.7rem;
  background-color: black;
  border: 1px solid #777777;
  border-radius: 2px;
  `;

export const InputMessage = styled(InputEmail)`
  height: 50px;
`;

export const Send = styled.button`
width: 100%;
height: 30px;
color: white;
background-color: black;
font-size: 1.8rem;
font-weight: 400;
border: 1px solid white;
border-radius: 2px;

  &:hover {
  background-color: white;
  border: 1px solid white;
  color: black;
}
`;