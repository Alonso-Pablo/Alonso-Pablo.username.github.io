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

export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
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
  padding-bottom: 30px;
  font-size: 2rem;
  font-weight: 400;
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
  color: #777777;
  transition: color 0.8s;

  &:hover, &:hover span{
    color: white;
    transition: color 0.4s;
    cursor: pointer;
  }
`;

export const ItemTitle = styled.span`
  padding-top: 10px;
  font-size: 1.7rem;
  font-weight: 400;
`;

export const YouTubeIcon = styled.svg`
  flex: 1;
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

  /* &:hover svg:nth-child(1) {
    display: none;
  }

  svg:nth-child(2) {
    display: none;
  }

  &:hover svg:nth-child(2) {
    display: flex;
  } */
`;


export const SvgAbsolute = styled.svg`
  display: flex;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 1;

`;
