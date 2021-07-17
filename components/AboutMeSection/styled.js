import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  border-top: 1px solid ${({theme}) => theme.fourthColor };
`;

export const ResponsiveContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleSection = styled.h2`

  color: ${({theme}) => theme.titlesection.fontColor };
  font-family: ${({theme}) => theme.titlesection.fontFamily };
  font-size: ${({theme}) => theme.titlesection.fontSize };
  font-weight: ${({theme}) => theme.titlesection.fontWeight };
  line-height: ${({theme}) => theme.titlesection.lineHeight };

  margin-top: 80px;
  margin-bottom: 50px;
`;

export const Article = styled.article`
  width: 100%;
`;

export const Br = styled.div`
  margin-top: 20px;
`;

export const Paragraph = styled.p`

  color: ${({theme}) => theme.paragraph.fontColor };
  font-family: ${({theme}) => theme.paragraph.fontFamily };
  font-size: ${({theme}) => theme.paragraph.fontSize };
  font-weight: ${({theme}) => theme.paragraph.fontWeight };
  line-height: ${({theme}) => theme.paragraph.lineHeight };
`;

export const ParagraphGray = styled.p`

  color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.paragraph.fontFamily };
  font-size: ${({theme}) => theme.paragraph.fontSize };
  font-weight: ${({theme}) => theme.paragraph.fontWeight };
  line-height: ${({theme}) => theme.paragraph.lineHeight };
`;