import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  width: 80%;
  flex-direction: column;
  align-items: center;
  border: 1px solid #777777;
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
  justify-content: space-around;
  align-items: center;
`;