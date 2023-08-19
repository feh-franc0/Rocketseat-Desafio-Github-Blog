import { styled } from "styled-components";

export const PublicationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 48px;
`;

export const Publication = styled.div`
  background-color: ${({theme}) => theme["Base-Post"]};
  width: calc(50% - 16px);
  height: 260px;
  border-radius: 10px;

  text-align: center;
  box-sizing: border-box;
  padding: 32px;
  position: relative;

  h2 {
    color: ${({theme}) => theme["Base-Title"]};
    box-sizing: border-box;
    text-align: left;
  }

  div {
    color: ${({theme}) => theme["Base-Span"]};
    position: absolute;
    right: 32px;
    top: 37px;
    font-size: 12px;
  }

  p{
    margin-top: 20px;
    color: ${({theme}) => theme["Base-Text"]};
    text-align: left;
  }
`;