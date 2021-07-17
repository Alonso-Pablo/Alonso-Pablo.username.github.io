import styled from 'styled-components';

export const Title = styled.h1`

  color: ${({theme}) => theme.title.fontColor };
  font-family: ${({theme}) => theme.title.fontFamily };
  font-size: ${({theme}) => theme.title.fontSize };
  font-weight: ${({theme}) => theme.title.fontWeight };
  line-height: ${({theme}) => theme.title.lineHeight };
`;


export const SubTitleHTwo = styled.h2`

  color: ${({theme}) => theme.subtitle.fontColor };
  font-family: ${({theme}) => theme.subtitle.fontFamily };
  font-size: ${({theme}) => theme.subtitle.fontSize };
  font-weight: ${({theme}) => theme.subtitle.fontWeight };
  line-height: ${({theme}) => theme.subtitle.lineHeight };

  margin-left: 0.5%;
  margin-bottom: 30px;
`;

export const Details = styled.span`

  color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.details.fontFamily };
  font-size: ${({theme}) => theme.details.fontSize };
  font-weight: ${({theme}) => theme.details.fontWeight };
  line-height: ${({theme}) => theme.details.lineHeight };

  margin-bottom: 30px;
`;

export const LinkA = styled.a`

  color: ${({theme}) => theme.linka.fontColor };
  font-family: ${({theme}) => theme.linka.fontFamily };
  font-size: ${({theme}) => theme.linka.fontSize };
  font-weight: ${({theme}) => theme.linka.fontWeight };
  line-height: ${({theme}) => theme.linka.lineHeight };
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

export const SubtitleHThree = styled.h3`

  color: ${({theme}) => theme.subtitle.fontColor };
  font-family: ${({theme}) => theme.subtitle.fontFamily };
  font-size: ${({theme}) => theme.subtitle.fontSize };
  font-weight: ${({theme}) => theme.subtitle.fontWeight };
  line-height: ${({theme}) => theme.subtitle.lineHeight };

  padding-bottom: 30px;
`;

export const ItemTitle = styled.span`

  color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.itemtitle.fontFamily };
  font-size: ${({theme}) => theme.itemtitle.fontSize };
  font-weight: ${({theme}) => theme.itemtitle.fontWeight };
  line-height: ${({theme}) => theme.itemtitle.lineHeight };

  padding-top: 10px;
`;

export const Paragraph = styled.p`

  color: ${({theme}) => theme.paragraph.fontColor };
  font-family: ${({theme}) => theme.paragraph.fontFamily };
  font-size: ${({theme}) => theme.paragraph.fontSize };
  font-weight: ${({theme}) => theme.paragraph.fontWeight };
  line-height: ${({theme}) => theme.paragraph.lineHeight };
`;

export const Message = styled.span`

  color: ${({theme}) => theme.fontColorThree };
  font-family: ${({theme}) => theme.paragraph.fontFamily };
  font-size: ${({theme}) => theme.paragraph.fontSize };
  font-weight: ${({theme}) => theme.paragraph.fontWeight };
  line-height: ${({theme}) => theme.paragraph.lineHeight };
`;


export const ButtonText = styled.span`

  color: ${({theme}) => theme.buttontext.fontColor };
  font-family: ${({theme}) => theme.buttontext.fontFamily };
  font-size: ${({theme}) => theme.buttontext.fontSize };
  font-weight: ${({theme}) => theme.buttontext.fontWeight };
  line-height: ${({theme}) => theme.buttontext.lineHeight };
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