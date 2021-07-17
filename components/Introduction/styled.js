import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 535px;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  height: 90%;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`

  color: ${({theme}) => theme.title.fontColor };
  font-family: ${({theme}) => theme.title.fontFamily };
  font-size: ${({theme}) => theme.title.fontSize };
  font-weight: ${({theme}) => theme.title.fontWeight };
  line-height: ${({theme}) => theme.title.lineHeight };
  margin-top: 80px;
`;


export const SubTitle = styled.h2`

  color: ${({theme}) => theme.subtitle.fontColor };
  font-family: ${({theme}) => theme.subtitle.fontFamily };
  font-size: ${({theme}) => theme.subtitle.fontSize };
  font-weight: ${({theme}) => theme.subtitle.fontWeight };
  line-height: ${({theme}) => theme.subtitle.lineHeight };

  margin-left: 0.5%;
  margin-bottom: 30px;
`;


export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
`;


export const Details = styled.span`

  color: ${({theme}) => theme.fontColorTwo };
  font-family: ${({theme}) => theme.details.fontFamily };
  font-size: ${({theme}) => theme.details.fontSize };
  font-weight: ${({theme}) => theme.details.fontWeight };
  line-height: ${({theme}) => theme.details.lineHeight };

  margin-bottom: 30px;
`;


export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  text-align: end;
  margin-bottom: 40px;

  & ul li {
    margin-bottom: 10px;
  }
`;


export const LinkA = styled.a`

  color: ${({theme}) => theme.linka.fontColor };
  font-family: ${({theme}) => theme.linka.fontFamily };
  font-size: ${({theme}) => theme.linka.fontSize };
  font-weight: ${({theme}) => theme.linka.fontWeight };
  line-height: ${({theme}) => theme.linka.lineHeight };
`;


export const ContainerSvg = styled.div`
  position: relative;
  width: calc(50% + 5px);
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  right: 0;
`;


export const ScrollIt = styled.div`
  position: relative;
  display: flex;
  width: 10px;
  align-self: center;
  justify-content: center;
  margin-bottom: 40px;
`;


export const ScrollAnimated = styled.span`
  position: absolute;
  display: inline-block;
  width: 6px;
  height: 6px;
  top: 70%;
  left: 20%;
  border-radius: 100%;
  background-color: ${({theme}) => theme.firstColor};
`;