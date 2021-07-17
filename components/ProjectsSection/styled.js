import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  border-top: 1px solid #4A4A4A;
`;

export const ResponsiveContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid #4A4A4A;
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const Subtitle = styled.h3`

  color: ${({theme}) => theme.subtitle.fontColor };
  font-family: ${({theme}) => theme.subtitle.fontFamily };
  font-size: ${({theme}) => theme.subtitle.fontSize };
  font-weight: ${({theme}) => theme.subtitle.fontWeight };
  line-height: ${({theme}) => theme.subtitle.lineHeight };

  padding-bottom: 30px;
`;

export const Container = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: color 0.8s;
  will-change: color;

  &:hover, &:hover span{
    color: ${({theme}) => theme.firstColor };
    transition: color 0.4s;
    cursor: pointer;
  }
`;

export const ItemTitle = styled.span`

  color: ${({theme}) => theme.fontColortwo };
  font-family: ${({theme}) => theme.itemtitle.fontFamily };
  font-size: ${({theme}) => theme.itemtitle.fontSize };
  font-weight: ${({theme}) => theme.itemtitle.fontWeight };
  line-height: ${({theme}) => theme.itemtitle.lineHeight };

  padding-top: 10px;
`;


export const YouTubeIcon = styled.svg`
  flex: 1;
  will-change: fill;

  path:nth-child(1) {
    fill: #4A4A4A;
    transition: fill 0.8s;
  }

  &:hover path:nth-child(1) {
    fill: #FF0000;
    transition: fill 0.4s;
  }
`;

export const Div = styled.div`
  will-change: opacity;
  position: relative;

  svg:nth-child(1) {
    position: relative;
    opacity: 1;
    transition: opacity 0.8s;
    
    z-index: 2;
  }

  &:hover svg:nth-child(1) {
    opacity: 0;
    transition: opacity 0.4s;
  }
`;


export const SvgAbsolute = styled.svg`
  display: flex;
  position: absolute;
  top: 0%;
  left: 0%;

  z-index: 1;
`;
