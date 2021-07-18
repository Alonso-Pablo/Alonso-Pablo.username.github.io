import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ContainerMessage = styled(motion.div)`
  position: -webkit-sticky;
  position: fixed;
  top: 1%;
  width: 80%;
  background-color: ${({theme}) => theme.firstColor };
  text-align: center;
  padding: 20px 0;
  border: 1px solid ${({theme}) => theme.fourthColor };
  border-radius: 2px;
  z-index: 9001;
`;

export const Message = styled.span`

  color: ${({theme}) => theme.fontColorThree };
  font-family: ${({theme}) => theme.paragraph.fontFamily };
  font-size: ${({theme}) => theme.paragraph.fontSize };
  font-weight: ${({theme}) => theme.paragraph.fontWeight };
  line-height: ${({theme}) => theme.paragraph.lineHeight };
`;

export const TitleSection = styled.h2`

  color: ${({theme}) => theme.titlesection.fontColor };
  font-family: ${({theme}) => theme.titlesection.fontFamily };
  font-size: ${({theme}) => theme.titlesection.fontSize };
  font-weight: ${({theme}) => theme.titlesection.fontWeight };
  line-height: ${({theme}) => theme.titlesection.lineHeight };

  margin-top: 80px;
`;

export const Details = styled.span`

  color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.details.fontFamily };
  font-size: ${({theme}) => theme.details.fontSize };
  font-weight: ${({theme}) => theme.details.fontWeight };
  line-height: ${({theme}) => theme.details.lineHeight };

  margin-bottom: 30px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const LabelEmail = styled.label`

  color: ${({theme}) => theme.label.fontColor };
  font-family: ${({theme}) => theme.label.fontFamily };
  font-size: ${({theme}) => theme.label.fontSize };
  font-weight: ${({theme}) => theme.label.fontWeight };
  line-height: ${({theme}) => theme.label.lineHeight };

  position: absolute;
  background-color: ${({theme}) => theme.secondColor };
  padding: 0 2px;
  border-radius: 2px;
  left: 5px;
  top: -7%;
`;

export const LabelMessage = styled(LabelEmail)`
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
  background-color: ${({theme}) => theme.secondColor };
  border: 1px solid ${({theme}) => theme.thirdColor };
  border-radius: 2px;
  `;

export const InputMessage = styled(InputEmail)`
  height: 50px;
`;

export const Send = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${({theme}) => theme.background };
  border: 1px solid ${({theme}) => theme.firstColor };
  border-radius: 2px;
  cursor: pointer;

  &:hover {
  background-color: ${({theme}) => theme.firstColor };
  border: 1px solid ${({theme}) => theme.firstColor };
}

 &:hover span {
  color: ${({theme}) => theme.message.fontColor };
 }
`;

export const ButtonText = styled.span`

  color: ${({theme}) => theme.buttontext.fontColor };
  font-family: ${({theme}) => theme.buttontext.fontFamily };
  font-size: ${({theme}) => theme.buttontext.fontSize };
  font-weight: ${({theme}) => theme.buttontext.fontWeight };
  line-height: ${({theme}) => theme.buttontext.lineHeight };
`;