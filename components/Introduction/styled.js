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
  width: 80%;
  max-width: 800px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Titles = styled.section`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Name = styled.h1`
  font-size: 5.5rem;
  line-height: 80%;
  margin-bottom: 10px;
`;
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 90%;
  margin-left: 0.5%;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  color: #777777;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 100%;
  margin-bottom: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: end;
  margin-bottom: 40px;

  & ul li {
    margin-bottom: 10px;
  }
`;

export const Scroll = styled.div`
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
  background-color: white;


`;