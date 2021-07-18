import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 15px;
  border-top: 1px solid ${({theme}) => theme.boderColor };
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
`;

export const A = styled.a`
  will-change: color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & svg, & svg path {
  will-change: fill;
  fill: ${({theme}) => theme.thirdColor };
  }

  &:hover svg path, &:hover p {
    color: ${({theme}) => theme.firstColor };
    fill: ${({theme}) => theme.firstColor };
  }
`;

export const ParagraphGray = styled.p`
 color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.paragraph.fontFamily };
  font-size: ${({theme}) => theme.paragraph.fontSize };
  font-weight: ${({theme}) => theme.paragraph.fontWeight };
  line-height: ${({theme}) => theme.paragraph.lineHeight };
  margin-top: 5px;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
`;

export const Detail = styled.span`
  color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.details.fontFamily };
  font-size: ${({theme}) => theme.message.fontSize };
  font-weight: ${({theme}) => theme.details.fontWeight };
  line-height: ${({theme}) => theme.details.lineHeight };

  margin-bottom: 30px;
`;
