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

export const Details = styled.h2`
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
  font-size: 2rem;
  font-weight: 900;
  text-align: end;
  margin-bottom: 40px;

  & ul li {
    margin-bottom: 10px;
  }
`;