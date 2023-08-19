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
`;

export const TextPost = styled.div`
  color: ${({theme}) => theme["Base-Text"]};

  p {
    span {
      color: ${({theme}) => theme.Blue};
      text-decoration: underline;
    }
  }
`;

export const CodePost = styled.div`
  padding: 16px;
  border-radius: 2px;
  color: ${({theme}) => theme.white};
  background-color: ${({theme}) => theme["Base-Post"]};
`

export const CodeLine = styled.p`
  padding: 2px 0;
  letter-spacing: 1px;
  font-size: 0.9rem;
  white-space: pre;
`;

export const CodeVar = styled.span`
  color: #80ABD6;
`;

export const CodeValue = styled.span`
  color: #6AD445;
`;

export const CodeComment = styled.span`
  color: #4F6173;
`