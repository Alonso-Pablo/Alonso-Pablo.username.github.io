import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 80px;
  border-top: 1px solid ${({theme}) => theme.boderColor };
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
`;