import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  width: 100%;

  justify-content: center;
  padding-top: 15px;
  border-top: 1px solid #4A4A4A;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & svg, & svg path {
  fill: #777777;
  }

  &:hover svg path,&:hover span {
    color: white;
    fill: white;
  }
`;

export const Description = styled.span`
  color: #777777;
  font-size: 1.8rem;
  margin-top: 5px;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: #777777;
  font-size: 1.7rem;
  padding: 15px 0;

`;