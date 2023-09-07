import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
`;

export const Content = styled.div`
  padding: 40px 32px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.white};

  & > p {
    color: ${({theme}) => theme["Base-Text"]};
    & > a{
      color: ${({theme}) => theme.Blue};
    }
  }
  & > pre {
    padding: 16px;
    border-radius: 2px;
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme["Base-Post"]};
  }
  & > pre > code {
    color: #4F6173;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
`;